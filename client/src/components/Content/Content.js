import React, { useState, useEffect } from 'react';
import { UserResponseButtons } from '../../components/UserResponseButtons/UserResponseButtons'
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ROOM } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_ADVENTURES } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { DPad } from '../../components/Dbuttons/Dbutton';
import { useLifeCountContext } from '../../utils/LifeCountContext';
import { Button } from 'react-bootstrap';

import './content.css'

export const Content = ({ adventureState, setAdventureState }) => {
    const [eventResolution, setEventResolution] = useState("");
    const [display, setDisplay] = useState("none");
    const { lifeCount } = useLifeCountContext();
    const [addAdventures, { error }] = useMutation(ADD_ADVENTURES);

    const saveAdventureHandler = async () => {
        try {
            const { data } = await addAdventures({
                variables: { roomNames: adventureState }
            })
        } catch (error) {
            console.error(error);
        }

    };

    const navigate = useNavigate();

    const { roomName } = useParams();

    const { loading, data } = useQuery(QUERY_ROOM, {
        variables: { roomName }
    });

    const room = data?.room || {};

    useEffect(() => {
        setAdventureState(adventureState => [...adventureState, roomName])
    }, [roomName])

    if (loading) {
        return <div>Loading...</div>
    };

    return (
        <>
            <div>
                {lifeCount <= 0 && navigate('/endgame', { state: { adventureState, deathMsg: room.deathMsg, slug: 'this is needed' } })}
                {room.roomName === "Attic" && navigate('/endgame', { state: { adventureState, deathMsg: room.deathMsg, slug: 'this is needed' } })}
            </div>
            {(
                // Checking if room has no event or event, render different XML
                Auth.loggedIn() && room.event.length === 0 ?
                    // If room has no event, render this 
                    <div className='text-center w-65 mx-auto'>
                        <h1 className='text-danger'>{room.roomName}</h1>
                        <p className='room_message'>{room.message}</p>
                        <DPad roomDirections={room.direction} setEventResolution={setEventResolution} display={"block"} setDisplay={setDisplay} setAdventureState={setAdventureState} />
                        {(room.roomName === "Safe Exit" || (room.roomName === "Dangerous Exit"))
                            &&
                            <div>
                                <Button variant='secondary' type="button" onClick={() => {
                                    saveAdventureHandler();
                                    navigate("/me")
                                }}>See your adventures...</Button>
                            </div>}
                    </div> :
                    // If room has event, render this
                    <div className='text-center w-65 mx-auto p-3'>
                        <h1 className='text-danger'>{room.roomName}</h1>
                        <p className='room_message'>{room.message}</p>
                        <UserResponseButtons userResponse={room.event[0]} setEventResolution={setEventResolution} setDisplay={setDisplay} />
                        <div>
                            <p className='room_message'>{eventResolution}</p>
                        </div>
                        <DPad roomDirections={room.direction} setEventResolution={setEventResolution} display={display} setDisplay={setDisplay} setAdventureState={setAdventureState} />
                    </div>
            )
            }
        </>
    )
}