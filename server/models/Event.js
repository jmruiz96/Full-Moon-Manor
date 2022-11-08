const { Schema } = require('mongoose');

const eventSchema = new Schema({
    eventOptions: [String],
    eventOutcome: [{
        userResponse: String,
        resolutionMessage: String,
        severity: String
    }]
});

module.exports = eventSchema;