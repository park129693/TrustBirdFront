import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import PostFixInput from "./PostFixInput";

//Sign In
const SignIn = () => {
  return (
    <Container style={{ maxWidth: "800px", margin: "auto" }}>
      <div
        style={{
          fontSize: 24,
          padding: "auto",
          marginTop: "208px",
          marginBottom: "32px",
          color: " #3B72F2",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        로그인
      </div>
      <Form style={{ marginTop: "10rem" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Eamil</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        {/* <Form.Group controlId="formBasicEmail">
          <Form.Label>Eamil</Form.Label>
          <PostFixInput type="email" placeholder="Enter email" required postfix="" />
        </Form.Group> */}

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ float: "right", marginTop: "16px" }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
