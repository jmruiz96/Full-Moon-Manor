const { Schema } = require ('mongoose');

const directionSchema = new Schema({
    userDirection: {
        type: String,
    },
    nextRoom: {
        type: String,
    }
});

module.exports = directionSchema;