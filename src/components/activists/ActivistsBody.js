/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import AppContext from '../../context/AppContext';
import TileView from './TileView';
import ListView from './ListView';
import Filter from '../../images/filter.png';
import SharedButton from '../shared/SharedButton';
import List from '../../images/List.png';
import AddActivist from './AddActivist';

const ActivistsBody = () => {
  const { handleShow } = useContext(AppContext);
  const [tile, showTile] = useState(true);
  const [list, showList] = useState(false);

  const display = () => {
    showTile(!tile);
    showList(!list);
  };

  const displayData = tile ? (
    <>
      <div className="filter">
        <img onClick={() => display()} src={Filter} alt="fileter for tile" />
      </div>
      <TileView />
    </>
  ) : (
    <>
      <div className="filter">
        <img onClick={() => display()} src={List} alt="list" />
      </div>
      <ListView />
    </>
  );
  return (
    <div className="activists-container">
      <div className="search-add">
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search for activists, movements, etc"
            className="search"
          />
          <span>
            <Search
              style={{
                position: 'absolute',
                marginLeft: '-24%',
                marginTop: '15px',
              }}
            />
          </span>

          {/* <SharedButton className="activist-search" text="Search" /> */}
          {/* <button className="activist-search">search</button> */}
          <div style={{ width: '20%' }}>
            <button className="btn btn-primary activist-search">Search</button>
          </div>
        </div>
        <div>
          {/* <SharedButton
                      classname="add"
                      onClick={handleShow}
                      text="Add New Activist"
                    /> */}
          <button onClick={handleShow} className="add">
            Add New Activist
          </button>
        </div>
      </div>

      <AddActivist />
      <>{displayData}</>
    </div>
  );
};
export default ActivistsBody;
