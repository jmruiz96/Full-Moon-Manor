import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { UserResponseButtons } from '../../components/UserResponseButtons/UserResponseButtons'
import { Link, useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ROOM, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { DPad } from '../../components/Dbuttons/Dbutton';
import { Sidebar } from '../../components/Aside/Aside'
import { useLifeCountContext } from '../../utils/LifeCountContext'
import { Content } from '../../components/Content/Content';
import { LifeCount } from '../../components/LifeCount/LifeCount'

export const Room = () => {
    const [adventureState, setAdventureState] = useState([])
    // const [roomState, setRoomState] = useState('Torture Room')
    // const [eventResolution, setEventResolution] = useState("");
    // const [visibility, setVisibility] = useState("hidden");
    // const { lifeCount, setLifeCount } = useLifeCountContext();

    // const { roomName } = useParams();

    // const { loading, data } = useQuery(QUERY_ROOM, {
    //     variables: { roomName }
    // });


    // console.log(data)
    // const room = data?.room || {};

    // if (loading) {
    //     return <div>Loading...</div>
    // };
    return (
        <>
            {
                !Auth.loggedIn() ?
                    (
                        <>
                            {/* <p>'You must be logged in!</p> */}
                            < Navigate to="/">
                                {/* <Button type="button"> Go Back </Button> */}
                            </Navigate>
                        </>
                    ) : (
                        <div className='d-flex w-100'>
                            <Sidebar adventureState={adventureState} />
                            <div className='mx-auto'>
                                <LifeCount />
                                <Content setAdventureState={setAdventureState} />
                            </div>
                        </div>
                        // // Checking if room has no event or event, render different XML
                        // Auth.loggedIn() && room.event.length === 0 ?
                        //     // If room has no event, render this 
                        //     <div>
                        //         <p>You have {lifeCount} hit points left</p>
                        //         <h1>{room.roomName}</h1>
                        //         <p>{room.message}</p>
                        //         <DPad roomDirections={room.direction} />
                        //     </div> :
                        //     // If room has event, render this
                        //     <div>
                        //         <p>You have {lifeCount} hit points left</p>
                        //         <h1>{`${room.roomName} has an event`}</h1>
                        //         <UserResponseButtons userResponse={room.event[0]} setEventResolution={setEventResolution} setVisibility={setVisibility} />
                        //         <DPad roomDirections={room.direction} setEventResolution={setEventResolution} visibility={visibility} />
                        //         <div>
                        //             <p>{eventResolution}</p>
                        //         </div>
                        //     </div>
                    )
            }
        </>
    )
}

