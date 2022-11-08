const { Schema, model } = require('mongoose');
const eventSchema = require('./Event');
const directionSchema = require('./Direction');

const roomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    eventMessage: String,
    event: [eventSchema],
    direction: [directionSchema],
    isVisited: {
        type: Boolean,
    },
    deathMsg: String,
});

const Room = model('Room', roomSchema);

module.exports = Room;