import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLifeCountContext } from '../../utils/LifeCountContext';
import './home.css';
import Auth from '../../utils/auth'

const Home = () => {
  const { setLifeCount } = useLifeCountContext();
  setLifeCount(10);
  return (
    <main>
      <div className="mb-5 mx-auto p-2 text-center home-page-styling">
        <em><h1 className='text-danger'>Welcome to Full Moon Manor</h1></em>
        <div className='py-5 mx-auto custom-fade-in'>
          <p>
            It's the evening of October 31st. You are on your way to meet up with friends. Suddenly, a chill passes over you.
            It stops you in your tracks. Without warning, everything goes black.
          </p>
          <p>Full Moon Manor is a story-driven, text-based exploration game, where you have to manage your fears as you try to escape a terrifying haunted house.
            You start with 10 health points, and certain rooms might just have an event that may require you to make a choice. Choose wisely or you will
            lose health.
          </p>
          <h5>
            <strong>If you manage to keep your wits about you, you might just make it out alive.</strong>
          </h5>
        </div>
        {Auth.loggedIn() ?
          <Link to='/room/Torture Room' state={{slug: "this is needed"}}> <Button className='button-spacing' variant='danger'>Wake Up</Button> </Link>
          :
          <p>Log in above to get started</p>
        }
      </div>
    </main>
  );
};

export default Home;