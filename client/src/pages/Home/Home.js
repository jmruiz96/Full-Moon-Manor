import React from 'react';
import { useQuery } from '@apollo/client';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLifeCountContext } from '../../utils/LifeCountContext';

const Home = () => {
  const { setLifeCount } = useLifeCountContext();
  setLifeCount(10);
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3">
          <h1>This is the home page</h1>
          <Link to='/room/Torture Room'> <Button variant='danger'> Start New Adventure </Button> </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;