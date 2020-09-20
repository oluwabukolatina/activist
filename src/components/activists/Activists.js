/* eslint-disable react/button-has-type */
import React from 'react';
import Header from '../layouts/Header';
import Filter from '../../images/filter.png';
import TileView from './TileView';
import ListView from './ListView';

const Activists = () => {
  return (
    <div>
      <Header />
      <div className="activists-container">
        <div className="search-add">
          <div>
            <input />
            <button className="activist-search">search</button>
          </div>
          <div>
            <button className="add">Add New Activist</button>
          </div>
        </div>
        <div className="filter">
          <img src={Filter} alt="fileter" />
        </div>
        {/* <TileView /> */}
        <ListView />
      </div>
    </div>
  );
};
export default Activists;
