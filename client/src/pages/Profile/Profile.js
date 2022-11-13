import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Button, Accordion } from 'react-bootstrap';
import "./profile.css"

import { QUERY_ME } from '../../utils/queries';

export const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    console.log(data)
    const user = data?.me || {};

    if (loading) {
        return <div>Loading...</div>
    };

    if (!user?.name) {
        return (
            <>
                <h4>
                    You need to be logged in to see this.
                </h4>
                <Link to="/">
                    <Button type="button"> Go Back </Button>
                </Link>
            </>
        )
    }

    return (
        <div>
            <div className="flex-row justify-center mb-3">
                {user.adventures.length === 0 ? (
                    <>
                        <h2 className="col-12 col-md-10 p-3 mb-5">
                            Hey there, {user.name}. You don't have any adventures yet.
                        </h2>
                        <Link to="/">
                            <Button type="button"> Go Back </Button>
                        </Link>

                    </>
                ) : (
                    <>
                        <h2 className="col-12 col-md-10 p-3 mb-5">
                            Hey there, {user.name}. Take a look at your past adventures below!
                        </h2>
                        <Accordion>
                            {user.adventures.map((adventure, index) => {
                                return (
                                    <Accordion.Item data-id={adventure._id} key={`adventure-id: ${adventure._id}`} eventKey={index}>
                                        <Accordion.Header>Adventure #{index + 1}</Accordion.Header>
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