const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const adventureSchema = require('./Adventure')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-zA-Z0-9_\.-]+)@([\dA-Za-z\.-]+)\.(com|net|edu|gov|me)$/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    adventures: [adventureSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

//Creating a new virtual fields titled firstName and lastName based on fullName user input
userSchema.virtual('fullName')
    .set(function (v) {
        const nameArray = v.split(' ');
        const first = nameArray[0];
        const last = nameArray[nameArray.length - 1];
        this.set({ firstName: first, lastName: last });
    });

// userSchema.virtual('adventuresList')
//     .get(function () {
//         return this.adventures.length
//     });

//Hashing user password on signup
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

//Comparing inputted password with user's stored hashed password on login
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const User = model('User', userSchema);

module.exports = User;