const { Room, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        room: async (_, { roomName }) => {
            return Room.findOne({ roomName });
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          }
    },

    Mutation:{
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        addAdventures: async (_, args, context) => {
            if (context.user){
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$push: args},
                    {new: true, runValidators: true}
                )
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeAdventures: async (_, args, context) => {
            if (context.user){
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: {
                        adventures: args
                    }},
                    {new: true}
                )
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;