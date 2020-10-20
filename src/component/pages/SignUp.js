import React from "react";
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
      <Form style={{ maxWidth: "100%" }}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label> 이름 </Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label> 이메일 </Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label> 비밀번호 </Form.Label>
          <Form.Control type="password" required />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordCheck">
          <Form.Label> 비밀번호 재확인 </Form.Label>
          <Form.Control type="password" required />
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
          <Form.Label> 휴대전화 </Form.Label>
          <Form.Control type="text" placeholder="전화번호 입력" required />
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        type="submit"
        style={{ width: "100%", float: "right", marginTop: "16px" }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default SignUp;
