import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { Button, Accordion } from 'react-bootstrap';
import "./profile.css"

import { QUERY_ME } from '../../utils/queries';
import { REMOVE_ADVENTURES } from '../../utils/mutations';

export const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me || {};

    const [removeAdventures, { error }] = useMutation(REMOVE_ADVENTURES);

    if (loading) {
        return <div>Loading...</div>
    };


    const removeAventuresHandler = async (adventureId) => {
        try {
            const { data } = await removeAdventures({
                variables: { adventureId }
            })
        } catch (err) {
            console.error(err)
        };
    };

    if (!user?.name) {
        return (
            <>
                <h4>
                    You need to be logged in to see this.
                </h4>
                <Link to="/">
                    <Button variant='secondary' type="button"> Go Back </Button>
                </Link>
            </>
        )
    }

    return (
        <div className="overflow-control">
            <div className="flex-row justify-center">
                {user.adventures.length === 0 ? (
                    <>
                        <h2 className="col-12 col-md-10 p-3 mb-5" id="message">
                            Hey there, {user.name}. You don't have any adventures yet.
                        </h2>
                        <Link to="/">
                            <Button variant='secondary' type="button"> Go Back </Button>
                        </Link>

                    </>
                ) : (
                    <>
                        <h2 className="col-12 col-md-10 p-3 mb-5" id="message">
                            Hey there, {user.name}. Take a look at your past adventures below!
                        </h2>
                        <Accordion>
                            {user.adventures.map((adventure, index) => {
                                return (
                                    <Accordion.Item data-id={adventure._id} key={`adventure-id: ${adventure._id}`} eventKey={index}>
                                        <Accordion.Header className=''>
                                            <Button
                                                className="btn btn-sm btn-danger mx-3"
                                                onClick={() => removeAventuresHandler(adventure._id)}
                                            >
                                                X
                                            </Button>
                                            <p className='adventure'>Adventure #{index + 1}</p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {adventure.roomNames.map((room, index) => {
                                                    return <li key={`adventure-room-index:${index}`}>{room}</li>
                                                })}
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                    </>
                )}
            </div>
        </div>
    )
}