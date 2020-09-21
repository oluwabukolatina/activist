import React from 'react';
import Clap from '../../images/clap-hand.png';
import Filter from '../../images/filter.png';

const TileView = () => {
  return (
    <>
      <div className="filter">
        <img src={Filter} alt="fileter" />
      </div>
      <div className="activists">
        <div className="activist">
          <div className="image-clap">
            <img
              className="activist-image"
              src="https://via.placeholder.com/150"
              alt="activist"
            />
            <div className="clap-count">
              <img src={Clap} alt="clap-hand" />
              <p>3.6k</p>
            </div>
          </div>
          <h3>Will.I.Am</h3>
          <p>
            lorem ipsum diplot claifornia lana slow drake touch amazing music
          </p>
          <p>
            Born 
{' '}
<span>March 15, 1975</span>
            in 
{' '}
<span>Los Angeles</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default TileView;
