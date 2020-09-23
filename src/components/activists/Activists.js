/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React from 'react';
import Header from '../layouts/Header';
import useActivists from '../../hooks/useActivists';
import { AppProvider } from '../../context/AppContext';
import ActivistsBody from './ActivistsBody';

const Activists = () => {
  const {
    activists,
    onChange,
    newActivist,
    createActivist,
    handleShow,
    handleClose,
    show,
  } = useActivists();

  return (
    <>
      <Header />
      <AppProvider
        value={{
          activists,
          onChange,
          newActivist,
          createActivist,
          handleShow,
          handleClose,
          show,
        }}
      >
        <ActivistsBody />
      </AppProvider>
    </>
  );
};
export default Activists;
