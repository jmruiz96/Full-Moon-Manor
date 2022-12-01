import React from "react";
import { Link } from 'react-router-dom'
import './dbutton.css';

export const DPad = ({ roomDirections, setEventResolution, display, setDisplay }) => {

    return (
        <div style={{ display }} className="set dark">
            <nav className="o-pad">
                <div onClick={() => {
                    setDisplay("none");
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