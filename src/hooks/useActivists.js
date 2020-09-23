import { useState, useEffect } from 'react';
import axios from 'axios';

const GET_ACTIVISTS_URL = `https://example-data.draftbit.com/activists?_limit=10`;
const useActivists = () => {
  const [activists, setActivists] = useState([]);
  useEffect(() => {
    async function getActivists() {
      try {
        const response = await axios.get(`${GET_ACTIVISTS_URL}`);
        console.log(response.data);
        if (response.data) {
          setActivists(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getActivists();
  }, []);
  return { activists };
};
export default useActivists;
