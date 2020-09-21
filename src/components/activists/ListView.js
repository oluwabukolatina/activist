import React from 'react';
import List from '../../images/List.png';

const ListView = () => {
  return (
    <>
      <div className="filter">
        <img src={List} alt="list" />
      </div>
      <table>
        <tr>
          <th />
          <th>Name</th>
          <th>Description</th>
        </tr>

        <tr>
          <td className="list-activist">
            <img
              className="list-activist-image"
              src="https://via.placeholder.com/150"
              alt="activist"
            />
          </td>
          <td className="list-activist-name">Giovanni Rovelli</td>
          <td className="list-activist-description">
            American Community Leader and activist
          </td>
        </tr>
        <tr>
          <td className="list-activist">
            <img
              className="list-activist-image"
              src="https://via.placeholder.com/150"
              alt="activist"
            />
          </td>
          <td className="list-activist-name">Giovanni Rovelli</td>
          <td className="list-activist-description">
            American Community Leader and activist
          </td>
        </tr>
      </table>
    </>
  );
};
export default ListView;
