import React from "react";
import { Form, Button } from "react-bootstrap";

//Sign In
const SignIn = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Eamil</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignIn;
