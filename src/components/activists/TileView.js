/* eslint-disable react/require-default-props */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Clap from '../../images/clap-hand.png';

const TileView = ({ activists }) => {
  console.log(activists);
  console.log(typeof activists);
  const displayActivists =
    activists && activists.length
      ? activists.map((activist) => {
          return (
            <div className="activist">
              <div className="image-clap py-3">
                <img
                  className="activist-image"
                  src={activist.imgUrl}
                  alt="activist"
                />
                <div className="clap-count">
                  <img src={Clap} alt="clap-hand" />
                  <p>3.6k</p>
                </div>
              </div>
              <h3>{activist.person}</h3>
              <p>{activist.description}</p>
              <p>
                <span style={{ color: '#cccccc' }}>Born</span>

                {moment(activist.dateOfBirth).format('DD-MM-YYYY')}
                <span style={{ color: '#cccccc' }}> in</span>

                <span>{activist.placeOfBirth}</span>
              </p>
            </div>
          );
        })
      : 'no activists';
  return <div className="activists">{displayActivists}</div>;
};
TileView.propTypes = {
  activists: PropTypes.shape(),
};
export default TileView;
