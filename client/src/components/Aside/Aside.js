import React, { useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { QUERY_ROOM } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { DPad } from '../../components/Dbuttons/Dbutton';
import '../Aside/aside.css'

export const Sidebar = ({ adventureState }) =>  {
    const { roomName } = useParams();
    const { loading, data } = useQuery(QUERY_ROOM, {
        variables: { roomName }
    });
    // const room = data?.room || {};
    // if (loading) {
    //     return <div>Loading...</div>
    // };

    return (
        <div className="sidebar">
            <h3>Your adventure so far...</h3>
            <ul>
                {adventureState.map((room, index) => {
                    return (
                        <li>{room}</li>
                    )
                })}
                
            </ul>
            {/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav> */}    
        </div>
        );
  };

//   const Sidebar = withRouter(Side);
//   export default Sidebar