import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ADVENTURES } from '../../utils/mutations';

import './end.css'

export const End = () => {
    const location = useLocation();
    const adventureState = location.state.adventureState;
    const deathMsg = location.state.deathMsg;

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
        <div className= 'text-center'>
            <p id='death_message'className='text-danger'>{deathMsg}</p>
            <Button variant='secondary' type="button" onClick={() => {
                addAdventureHandler();
                navigate('/me');
            }}>See your adventures...</Button>
        </div>
    )
}