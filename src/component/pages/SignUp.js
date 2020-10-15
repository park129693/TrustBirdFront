import React, { Fragment } from "react";
import PageHeader from "./PageHeader";
import { Container, Form, Button } from "react-bootstrap";

//Sign Up
const SignUp = () => {
  //   const [setUserName, useUserName] =  useState(setUserName, useUserName)
  //   const [setEmail, useEmail] =  useState(setUserEmail, useUserEmail)
  //   const [setPassword, usePassword] =  useState(setUserPassword, useUserPassword)
  //   const [setDateOfBirth,useDateOfBirth] = useState(setDateDfBirth,useDateOfBirth)
  //   const [setGender,useGender] = useState(setGender,useGender)
  //   const [setTelephoneNum,useTelephoneNum] = useState(setTelephoneNum,useTelephoneNum)

  return (
    <Container style={{ maxWidth: "500px", margin: "auto" }}>
      <PageHeader>회원가입</PageHeader>
      {/* <div
        style={{
          fontSize: 24,
          padding: "auto",
          marginBottom: "32px",
          marginTop: "208px",
          color: " #3B72F2",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        회원가입
      </div> */}
      <Form style={{maxWidth:"100%"}}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label> 사용자 이름 </Form.Label>
          <Form.Control type="text" placeholder="사용자 이름 입력" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label> Email </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label> Password </Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordCheck">
          <Form.Label> PasswordCheck </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password Check"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicDateOfBirth">
          <Form.Label> 생년월일 </Form.Label>
          <Form.Control type="date" required />
        </Form.Group>

        <Form.Group controlId="formBasicGender">
          <Form.Label> 성별 </Form.Label>
          <Form.Control as="select" custom>
            <option>남성</option>
            <option>여성</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicTelephoneNum">
          <Form.Label> 휴대전화번호 </Form.Label>
          <Form.Control type="text" placeholder="휴대전화번호 입력" required />
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        type="submit"
        style={{ float: "right", marginTop: "16px" }}
      >
        Submit
      </Button>
    </Container>
  );
};

export default SignUp;
