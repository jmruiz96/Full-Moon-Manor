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
                        <div className='d-flex w-100'>
                            <Sidebar adventureState={adventureState} />
                            <div className='mx-auto'>
                                <LifeCount />
                                <Content adventureState={adventureState} setAdventureState={setAdventureState} />
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

