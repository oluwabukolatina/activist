import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="app">
      <div className="logo">ActivistHub</div>
      <div className="cta">
        <p>Learn About Historical Figures Who</p>
        <p>Have Made Meaningful Social Change.</p>
        <button>
          <Link className="link" to="/activists">
            View Activists
          </Link>
{' '}
        </button>
      </div>
    </div>
  );
};
export default Home;
