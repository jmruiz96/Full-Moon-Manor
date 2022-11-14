import React from 'react';
import { useLifeCountContext } from '../../utils/LifeCountContext';

export const LifeCount = () => {
    const { lifeCount } = useLifeCountContext();
    return (
        <p className='text-end'>You have {lifeCount} hit points left</p>
    )
}