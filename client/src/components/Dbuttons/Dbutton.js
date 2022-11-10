import { React } from "react";
import { Link } from 'react-router-dom'
import './dbutton.css';

export const DPad = ({ roomDirections }) => {
    return (
        <div className="set dark">
            {console.log(roomDirections)}
            <nav className="o-pad">
                {/* <a className="up" href="#"></a>
                <a className="right" href="#"></a>
                <a className="down" href="#"></a>
                <a className="left" href="#"></a> */}
                {roomDirections.map((room, index) => {
                    return (
                        <Link key={`room-index: ${index}`} className={room.userDirection} to={`/room/${room.nextRoom}`} />
                    )
                })}
            </nav>
        </div>
    )
}