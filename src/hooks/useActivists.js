import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

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
  const [activists, setActivists] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (e) => {
    const { name, value } = e.target;
    setNewActivist({ ...newActivist, [name]: value });
  };
  const createActivist = async () => {
    console.log(newActivist);
    try {
      const response = await axios.post(`${ACTIVISTS_URL}`, newActivist);
      console.log(response.data);
      if (response.data.id) {
        setNewActivist(initialState);

        setShow(!show);
        setActivists([...activists, response.data]);
        console.log([...activists, response.data]);
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
          setActivists(response.data);
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
