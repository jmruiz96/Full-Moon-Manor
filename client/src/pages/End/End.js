import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ADVENTURES } from '../../utils/mutations';

export const End = () => {
    const location = useLocation();
    const adventureState = location.state.adventureState;
    const deathMsg = location.state.deathMsg;
    // console.log(adventureState);
    // console.log("deathMsg: " + deathMsg);

    const [addAdventures, { error }] = useMutation(ADD_ADVENTURES)

    const addAdventureHandler = async () => {
        try {
            const { data } = await addAdventures({
                variables: { roomNames: adventureState }
            })
        } catch (error) {
            console.error(error);
        }

    };

    const navigate = useNavigate();

    return (
        <div>
            <p>{`Death page ${deathMsg}`}</p>
            <Button variant='secondary' type="button" onClick={() => {
                addAdventureHandler();
                navigate('/me');
            }}>See your adventures...</Button>
        </div>
    )
}