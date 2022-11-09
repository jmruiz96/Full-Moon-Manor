const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Room {
        _id: ID
        roomName: String
        message: String
        eventMessage: String
        event: [Event]
        direction: [Direction]
        isVisited: Boolean
        deathMsg: String
    }

    type Event {
        _id: ID
        eventOutcome: [Outcome]
    }

    type Outcome {
        _id: ID
        userResponse: String
        resolutionMessage: String
        severity: String
    }

    type Direction {
        _id: ID
        userDirection: String
        nextRoom: String
    }

    type Query {
        room(roomName: String): Room
    }
`;

module.exports = typeDefs;