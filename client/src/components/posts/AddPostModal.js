import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Form from "react-bootstrap/esm/Form";

AddPostModal.propTypes = {};

function AddPostModal(props) {
  return (
    <Modal show={true}>
      <Modal.Header closeButton>
        <Modal.Title>What do you want to learn ?</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
            />
            <Form.Text id="title-help" muted>
              Require
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              name="description"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              type="text"
              placeholder="URL"
              name="url"
              required
              aria-describedby="url-help"
            />
            <Form.Text id="url-help" muted>
              Require
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" type="submit">
            Learn It!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddPostModal;
