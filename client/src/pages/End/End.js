import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

export const End = () => {
    const location = useLocation();
    const adventureState = location.state.adventureState;
    const deathMsg = location.state.deathMsg;
    // console.log(adventureState);
    // console.log("deathMsg: " + deathMsg);

    return (
        <div>
            <p>{`Death page ${deathMsg}`}</p>
        </div>
    )
}