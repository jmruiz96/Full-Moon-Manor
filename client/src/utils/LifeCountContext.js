import React, { createContext, useContext, useState } from 'react';

const LifeCountContext = createContext();

export const useLifeCountContext = () => useContext(LifeCountContext);

export const LifeCountProvider = ({ children }) => {
    const [lifeCount, setLifeCount] = useState(10);

    return (
        <LifeCountContext.Provider value={{ lifeCount, setLifeCount }}>
            {children}
        </LifeCountContext.Provider>
    )
}