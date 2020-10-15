import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import PostFixInput from "./PostFixInput";
import PageHeader from "./PageHeader";
import Logo from "../component/icons/LogoIcon";


//Sign In
const SignIn = () => {
  return (
    <Container style={{ maxWidth: "800px", margin: "auto" }}>
    <div style={{
        fontSize: 60,
        margin: "auto",
        marginBottom: "10px",
        marginTop:"180px",
        color: "#3B72F2",
        fontWeight: "bold",
        textAlign: "center",  }}>
      <Logo />
      로그인
    </div>
      <Form style={{ marginTop: "5rem" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        {/* <Form.Group controlId="formBasicEmail">
          <Form.Label>Eamil</Form.Label>
          <PostFixInput type="email" placeholder="Enter email" required postfix="" />
        </Form.Group> */}

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" required />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          size="lg"
          style={{ backgroundColor:"#3B72F2", outlineColor:"#3B72F2", marginTop: "16px" }}
        >
          로그인 하기
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
