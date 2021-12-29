import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

LoginForm.propTypes = {};

function LoginForm(props) {
  return (
    <>
      <Form className="my-4">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Button variant="success" type="submid">
          Login
        </Button>
      </Form>

      <p>
        Don't have an account? <Link to="/register"><Button variant="info" size="sm" className="ml-2">Register</Button></Link>
      </p>
    </>
  );
}

export default LoginForm;
