const { Schema } = require('mongoose');

const adventureSchema = new Schema({
    roomNames: {
        type: [String]
    }
});

module.exports = adventureSchema;