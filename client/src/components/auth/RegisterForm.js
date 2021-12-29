import React from 'react';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
Register.propTypes = {
    
};

function Register(props) {
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
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
        </Form.Group>
        <Button variant="success" type="submid">
          Register
        </Button>
      </Form>

      <p>
        Already have an account? <Link to="/login"><Button variant="info" size="sm" className="ml-2">Login</Button></Link>
      </p>
    </>
    );
}

export default Register;