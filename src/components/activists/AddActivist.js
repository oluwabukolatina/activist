import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Profile from '../../images/photo.png';
import AppContext from '../../context/AppContext';

const AddActivist = () => {
  const {
    onChange,
    newActivist,
    createActivist,
    handleShow,
    handleClose,
    show,
  } = useContext(AppContext);
  const {
    description,
    dateOfBirth,
    placeOfBirth,
    imgUrl,
    person,
  } = newActivist;
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton class="header">
        <Modal.Title className="add-title">
          <b>Add an activist</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <div className="d-flex">
              <img className="image-modal" src={Profile} alt="activist" />

              <p className="add-photo"> Add a photo </p>
              {/* <input className="add-photo" type="file">
                                        {/* <b>Add a photo</b> 
                                      </input> */}
            </div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Activists Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter activist name"
              name="person"
              value={person}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="description"
              value={description}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group
            className="d-flex"
            controlId="exampleForm.ControlSelect1"
            style={{ justifyContent: 'space-between' }}
          >
            <div>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={onChange}
                placeholder="Select activist birth Date"
              />
            </div>

            <div>
              <Form.Label>Place of Birth</Form.Label>
              <Form.Control
                name="placeOfBirth"
                value={placeOfBirth}
                onChange={onChange}
                type="text"
                placeholder="Enter place of birth"
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="footer">
        {/* <SharedButton text="Add Activist" className="add-new" /> */}
        <div onClick={() => createActivist()} style={{ width: '20%' }}>
          <button className="btn btn-primary activist-search">
            Add Activist
          </button>
        </div>
      </Modal.Footer>
      {/* <SharedButton text="Add Activist" classname="add-new" /> */}
    </Modal>
  );
};
export default AddActivist;
