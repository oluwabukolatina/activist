import PropTypes from 'prop-types';

import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const ListView = () => {
  const {
    activists,
    onChange,
    newActivist,
    createActivist,
    handleShow,
    handleClose,
    show,
  } = useContext(AppContext);
  console.log(activists);
  const displayTableData =
    activists && activists.length
      ? activists.map((activist) => {
          return (
            <tr key={activist.id}>
              <td className="list-activist">
                <img
                  className="list-activist-image"
                  src={activist.imgUrl}
                  alt="activist"
                />
              </td>
              <td className="list-activist-name">{activist.person}</td>
              <td className="list-activist-description">
                {activist.description}
              </td>
            </tr>
          );
        })
      : 'no data';
  return (
    <table className="shadow">
      <tr>
        <th />
        <th>Name</th>
        <th>Description</th>
      </tr>

      {displayTableData}
    </table>
  );
};
ListView.propTypes = {
  activists: PropTypes.shape(),
};
export default ListView;
