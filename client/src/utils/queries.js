import { gql } from '@apollo/client';

export const QUERY_ROOM = gql`
query room($roomName: String) {
    room(roomName: $roomName) {
      _id
      deathMsg
      direction {
        nextRoom
        userDirection
      }
      event {
        _id
        eventOutcome {
          _id
          resolutionMessage
          severity
          userResponse
        }
      }
      eventMessage
      isVisited
      message
      roomName
    }
  }
`;

export const QUERY_ME = gql`
query me {
    me {
      _id
      adventures {
        _id
        roomNames
      }
      email
      name
    }
  }
`