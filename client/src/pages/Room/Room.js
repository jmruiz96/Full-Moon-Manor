import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Sidebar } from '../../components/Aside/Aside'
import { Content } from '../../components/Content/Content';
import { LifeCount } from '../../components/LifeCount/LifeCount'
import './room.css'

export const Room = () => {
    const [adventureState, setAdventureState] = useState([])

    return (
        <div>
            {
                !Auth.loggedIn() ?
                    (
                        <>
                            <p className="message">Please log in to start a new adventure!</p>
                            < Link to="/">
                                <Button variant='secondary' type="button"> Go Back </Button>
                            </Link>
                        </>
                    ) : (
                        <div className='d-flex w-100 custom-spacing'>
                            <Sidebar adventureState={adventureState} />
                            <div className='mx-auto w-80'>
                                <LifeCount />
                                <Content className='room_message' adventureState={adventureState} setAdventureState={setAdventureState} />
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

