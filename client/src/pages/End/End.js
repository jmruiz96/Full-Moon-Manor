import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ADVENTURES } from '../../utils/mutations';

import './end.css'

export const End = () => {
    const location = useLocation();
    const adventureState = location.state?.adventureState;
    const deathMsg = location.state?.deathMsg;
    const navigate = useNavigate();

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

    //Redirect to home if user tries to navigate directly to this page or try to reload
    useEffect(() => {
        if (location.state === null) return navigate("/");
        window.onbeforeunload = () => {
            navigate('/');
        };
    }, []);

    return (
        <div className= 'text-center'>
            <h1 className='text-danger' id='you_dead'>You Died</h1>
            <p id='death_message'>{deathMsg}</p>
            <Button variant='secondary' type="button" onClick={() => {
                addAdventureHandler();
                navigate('/me');
            }}>See your adventures...</Button>
        </div>
    )
}