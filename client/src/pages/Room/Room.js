import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ROOM, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth'
import { DPad } from '../../components/Dbuttons/Dbutton'

export const Room = () => {
    // const [roomState, setRoomState] = useState('Torture Room')
    // const [ lifeCount, setLifeCount ] = 10;
    // const [ eventResolution, setEventResolution ] = "";
    const [visibility, setVisibility] = "visibility: none;"

    const { roomName } = useParams();

    const { loading, data } = useQuery(QUERY_ROOM, {
        variables: { roomName }
    });

    console.log(data)
    const room = data?.room || {};

    if (loading) {
        return <div>Loading...</div>
    };
    return (
        <>
            {
                !Auth.loggedIn() ?
                    (<p>'You must be logged in!</p>
                    ) : (
                        // Checking if room has no event or event, render different XML
                        Auth.loggedIn() && room.event.length === 0 ?
                            // If room has no event, render this 
                            <div>
                                <h1>{room.roomName}</h1>
                                <p>{room.message}</p>
                                <DPad roomDirections = {room.direction} />
                            </div> :
                            // If room has event, render this
                            <div>
                                <h1>{`${room.roomName} has an event`}</h1>
                                {/* <p style={visibility}>(Directional Pad)</p> */}
                            </div>
                    )

            }
        </>
    )
}

