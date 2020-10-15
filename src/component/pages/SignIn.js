import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import PostFixInput from "./PostFixInput";
import PageHeader from "./PageHeader";
import Logo from "../icons/LogoIcon";
import "../Navbar/Navbar.css";



//Sign In
const SignIn = () => {
  return (
    <Container style={{ maxWidth: "500px", margin: "auto" }}>
    <div className="mainhead">
      <Logo />
      <div style={{
      fontSize: 60,
      fontWeight: "bold", 
      display:'inline-block',
      color: "#3B72F2",
      verticalAlign:'middle', marginLeft:"16px", }}>로그인</div>
    </div>
      <Form style={{ width:"500px", marginTop: "5rem" }}>
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
          style={{ width: "100%", backgroundColor:"#3B72F2", outlineColor:"#3B72F2", marginTop: "16px" }}
        >
          로그인 하기
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
