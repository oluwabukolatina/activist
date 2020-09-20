/* eslint-disable react/button-has-type */
import React from 'react';
import Header from '../layouts/Header';
import Filter from '../../images/filter.png';
import TileView from './TileView';

const Activists = () => {
  return (
    <div>
      <div className="logo-name">Activist Hub</div>
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
        <TileView />
      </div>
    </div>
  );
};
export default Activists;
