/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useState, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Search, CheckCircleFill } from 'react-bootstrap-icons';
import Header from '../layouts/Header';
import TileView from './TileView';
import ListView from './ListView';
import 'bootstrap/dist/css/bootstrap.min.css';
import SharedButton from '../shared/SharedButton';
import useActivists from '../../hooks/useActivists';
import Filter from '../../images/filter.png';
import List from '../../images/List.png';

const Activists = () => {
  const { activists } = useActivists();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openModal = () => setOpen(!open);
  const [tile, showTile] = useState(true);
  const [list, showList] = useState(false);
  const handleShowTile = () => {
    showTile(!tile);
    showList(!list);
  };
  const handleShowList = () => {
    showTile(!tile);
    showList(!list);
  };
  const display = () => {
    showTile(!tile);
    showList(!list);
  };

  const displayData = tile ? (
    <>
      <div onClick={() => display()} className="filter">
        <img src={Filter} alt="fileter for tile" />
      </div>
      <TileView activists={activists} />
    </>
  ) : (
    <>
      <div onClick={() => display()} className="filter">
        <img src={List} alt="list" />
      </div>
      <ListView activists={activists} />
    </>
  );
  return (
    <>
      <Header />
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
              <button className="btn btn-primary activist-search">
                Search
              </button>
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

        <Modal show={show} onHide={handleClose} size="lg">
          {/* <Modal.Header closeButton class="header">
            <Modal.Title class="add-title">Add an activist</Modal.Title>
          </Modal.Header> */}
          <Modal.Header closeButton class="header">
            <Modal.Title className="add-title">
              <b>Add an activist</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-5">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div className="d-flex">
                  <img
                    className="image-modal"
                    src="https://via.placeholder.com/150"
                    alt="activist"
                  />

                  <p className="add-photo"> Add a photo </p>
                  {/* <input className="add-photo" type="file">
                      {/* <b>Add a photo</b> 
                    </input> */}
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Activists Name</Form.Label>
                <Form.Control type="text" placeholder="Enter activist name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="5" />
              </Form.Group>

              <Form.Group
                className="d-flex"
                controlId="exampleForm.ControlSelect1"
                style={{ justifyContent: 'space-between' }}
              >
                <div>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="text" placeholder="Enter activist name" />
                </div>

                <div>
                  <Form.Label>Place of Birth</Form.Label>
                  <Form.Control type="text" placeholder="Enter activist name" />
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="footer">
            {/* <SharedButton text="Add Activist" className="add-new" /> */}
            <div style={{ width: '20%' }} onClick={() => openModal()}>
              <button className="btn btn-primary activist-search">
                Add Activist
              </button>
            </div>

            <Modal size="sm">
              <Modal.Body className="p-5">
                <CheckCircleFill size={16} />
              </Modal.Body>
            </Modal>
          </Modal.Footer>
          {/* <SharedButton text="Add Activist" classname="add-new" /> */}
        </Modal>
        <>{displayData}</>
      </div>
    </>
  );
};
export default Activists;
