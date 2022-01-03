import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { PostContext } from "../../contexts/PostContext";

UpdatePostModal.propTypes = {};

function UpdatePostModal(props) {
  //Contexts
  const {
    postState: { post },
    showUpdatePostModal,
    setShowUpdatePostModal,
    updatePost,
    setShowToast,
  } = useContext(PostContext);

  const closeDialog = () => {
    setUpdatedPost(post)
    setShowUpdatePostModal(false);
  };

  //State
  const [updatedPost, setUpdatedPost] = useState(post);

  useEffect(() => setUpdatedPost(post), [post]);

  const { title, description, url, status } = updatedPost;

  const onChangeUpdatePostForm = (event) => {
    // console.log(updatedPost);
    setUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updatePost(updatedPost);
    closeDialog();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showUpdatePostModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Making progress?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
              value={title}
              onChange={onChangeUpdatePostForm}
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
              value={description}
              onChange={onChangeUpdatePostForm}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              type="text"
              placeholder="URL"
              name="url"
              required
              aria-describedby="url-help"
              value={url}
              onChange={onChangeUpdatePostForm}
            />
            <Form.Text id="url-help" muted>
              Require
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              value={status}
              name="status"
              onChange={onChangeUpdatePostForm}
            >
              <option value="TO LEARN">TO LEARN</option>
              <option value="LEARNING">LEARNING</option>
              <option value="LEARNED">LEARNED</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update It!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UpdatePostModal;
