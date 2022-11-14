import React from 'react';
import { useLifeCountContext } from '../../utils/LifeCountContext';

export const LifeCount = () => {
    const { lifeCount } = useLifeCountContext();
    return (
        <p className='text-end custom-life-spacing'>You have {lifeCount} hit points left</p>
    )
}