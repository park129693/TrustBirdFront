import React from "react";
import { Container, Form, FormGroup, Button } from "react-bootstrap";
import PageHeader from "./PageHeader";

//Sign Modified
const SignModified = () => {
  return (
    <Container style={{ maxWidth: "500px", margin: "auto" }}>
      <PageHeader>회원정보 수정</PageHeader>

      <Form style={{ maxWidth: "100%" }}>
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
          <Form.Label> 전화번호 </Form.Label>
          <Form.Control type="text" placeholder="전화번호 입력" required />
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

export default SignModified;
