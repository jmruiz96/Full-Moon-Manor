import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

export const End = () => {
    const { roomName } = useParams();
    const location = useLocation();
    const adventureState = location.state.adventureState;
    const deathMsg = location.state.deathMsg;
    console.log(adventureState);
    console.log("deathMsg: " + deathMsg);

    return (
        <div>
            {roomName ?
                <p>{`Exit page ${adventureState}`}</p>
                :
                <p>{`Death page ${deathMsg}`}</p>}
        </div>
    )
}