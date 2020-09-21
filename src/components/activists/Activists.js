/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../layouts/Header';
import TileView from './TileView';
import ListView from './ListView';
import 'bootstrap/dist/css/bootstrap.min.css';
import SharedButton from '../shared/SharedButton';

const Activists = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header />
      <div className="activists-container">
        <div className="search-add">
          <div>
            <input />
            <SharedButton classname="activist-search" text="Search" />
            {/* <button className="activist-search">search</button> */}
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
          <Modal.Header closeButton class="header">
            <Modal.Title class="add-title">Add an activist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer class="footer">
            <SharedButton text="Add Activist" classname="add-new" />
          </Modal.Footer>
          {/* <SharedButton text="Add Activist" classname="add-new" /> */}
        </Modal>

        {/* <TileView /> */}
        <ListView />
      </div>
    </div>
  );
};
export default Activists;
