import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { activistReducer } from '../reducer/activistReducer';

const ACTIVISTS_URL = `https://example-data.draftbit.com/activists?_limit=10`;
const useActivists = () => {
  const initialState = {
    description: '',
    dateOfBirth: '',
    placeOfBirth: '',
    articleUrl: '',
    sourceUrl: '',
    imgUrl: '',
    person: '',
  };
  const [newActivist, setNewActivist] = useState(initialState);
  const [show, setShow] = useState(false);
  const [{ activists }, dispatch] = useReducer(activistReducer, {
    activists: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (e) => {
    const { name, value } = e.target;
    setNewActivist({ ...newActivist, [name]: value });
  };
  const createActivist = async () => {
    try {
      const response = await axios.post(`${ACTIVISTS_URL}`, newActivist);
      if (response.data.id) {
        setNewActivist(initialState);

        setShow(!show);

        dispatch({
          type: 'GET_ACTIVISTS',

          payload: [response.data, ...activists],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    async function getActivists() {
      try {
        const response = await axios.get(`${ACTIVISTS_URL}?_limit=10`);
        if (response.data) {
          // setActivists(response.data);
          dispatch({ type: 'GET_ACTIVISTS', payload: response.data });
        }
      } catch (err) {
        console.log(err);
      }
    }
    getActivists();
  }, []);
  return {
    activists,
    onChange,
    newActivist,
    createActivist,
    handleShow,
    handleClose,
    show,
  };
};
export default useActivists;
