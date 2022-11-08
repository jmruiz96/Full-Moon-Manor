const { Room } = require('../models');

const resolvers = {
    Query: {
        room: async (_, { roomName }) => {
            return Room.findOne({ roomName });
        }
    }
};

module.exports = resolvers;