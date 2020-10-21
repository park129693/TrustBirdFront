import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Page.css"

//Trust Output
const Trust = () => {
  return (
    <Container style={{ maxWidth: "800px"}} >
      <div className="pageheader">계약 신탁</div>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>소재지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={10}></Col>
      </Row>{" "}
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>소재지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={10}></Col>
      </Row>{" "}
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>소재지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={10}></Col>
      </Row>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>소재지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={10}></Col>
      </Row>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>소재지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={10}></Col>
      </Row>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>소재지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={10}></Col>
      </Row>
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

export default Trust;
