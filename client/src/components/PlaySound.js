import React, { useEffect, useState } from 'react';
import Sound from 'react-sound';
import backgroundMusic from '../assets/audio/2018-04-22_-_Dark_Winds_Chapter_1_-_David_Fesliyan.mp3';
import { Button } from 'react-bootstrap';


export const PlaySound = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        setIsPlaying(true)
    }, [])

    return (
        <div>
            <Button className='btn btn-secondary'onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play Music' : 'Stop Music'}</Button>
            <Sound
                url={backgroundMusic}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={300}
                loop={true}
            />
        </div>
    )
}