import React from "react";
import { Link } from 'react-router-dom'
import './dbutton.css';

export const DPad = ({ roomDirections, setEventResolution, visibility, setVisibility }) => {

    return (
        <div style={{ visibility }} className="set dark">
            <nav className="o-pad">
                <div onClick={() => {
                    setVisibility("hidden");
                    setEventResolution("");
                }}>
                    {roomDirections.map((room, index) => {
                        return (
                            <>
                                <Link key={`room-index: ${index}`} className={room.userDirection} to={`/room/${room.nextRoom}`} ></Link>
                            </>
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}