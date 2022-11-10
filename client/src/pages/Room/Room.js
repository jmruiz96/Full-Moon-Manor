import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ROOM, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth'

export const Room = () => {
    const { roomName } = useParams();

    const { loading, data } = useQuery(QUERY_ROOM, {
        variables: { roomName }
    });

    // console.log(data)
    const room = data?.room || {};

    if (loading) {
        return <div>Loading...</div>
    };
    return (
        <>
            {
                Auth.loggedIn() ?
                    <div>
                        <h1>{room.roomName}</h1>
                    </div> :
                    <p>"Must be logged in"</p>
            }
        </>
    )
}

