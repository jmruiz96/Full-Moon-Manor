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
        <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}>
          <h1>This is the home page</h1>
          <Link to='/room/Torture Room'> <Button variant='danger'> Start New Adventure </Button> </Link>
          {/* <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Home;