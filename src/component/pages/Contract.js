import React from "react";
import { Container, Table, Form } from "react-bootstrap";
import "./Page.css"


//Contract Output
const Contract = () => {
  return (
    <Container>
      <div className="pageheader">계약서 보기</div>
      <Form>
        <Form.Group>
          <Form.Label>기타 사항</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>

        <Form.Group>
          <Form.Label>첨부 파일</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contract;
