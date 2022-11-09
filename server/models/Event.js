const { Schema } = require('mongoose');

const eventSchema = new Schema({
    eventOutcome: [{
        userResponse: String,
        resolutionMessage: String,
        severity: String
    }]
});

module.exports = eventSchema;