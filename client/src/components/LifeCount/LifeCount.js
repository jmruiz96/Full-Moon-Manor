import React from 'react';
import { useLifeCountContext } from '../../utils/LifeCountContext';

import './lifecount.css'

export const LifeCount = () => {
    const { lifeCount } = useLifeCountContext();
    return (
        <p id='healthpoints' className='text-end custom-life-spacing'>You have {lifeCount} health points left</p>
    )
}