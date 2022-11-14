import React from "react";
import '../Aside/aside.css'

export const Sidebar = ({ adventureState }) =>  {
    return (
        <div className="sidebar w-100">
            <h3>Your adventure so far...</h3>
            <ul>
                {adventureState.map((room, index) => {
                    return (
                        <li key={`adventure-sidebar-id${index}`}>{room}</li>
                    )
                })}
            </ul> 
        </div>
        );
  };