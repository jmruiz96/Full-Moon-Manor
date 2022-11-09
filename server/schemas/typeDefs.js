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

    type Adventures {
        _id: ID
        roomNames: [String]
    }

    type User {
        _id: ID
        name: String
        email: String
        password: String
        adventures: [Adventures]
    }

    type Event {
        _id: ID
        eventOutcome: [Outcome]
    }

    type Auth {
        token: ID!
        user: User
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
        me: User
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addAdventures(adventures: [String]): User
        removeAdventures(adventures: [String]) :User
    }
`;

module.exports = typeDefs;