import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Sidebar } from '../../components/Aside/Aside'
import { Content } from '../../components/Content/Content';
import { LifeCount } from '../../components/LifeCount/LifeCount'
import './room.css'

export const Room = () => {
    const [adventureState, setAdventureState] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

 //Redirect to home if user tries to navigate directly to this page or try to reload
    useEffect(() => {
        if (location.state === null) return navigate("/");
        window.onbeforeunload = () => {
            navigate('/');
        };
    }, []);

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

