import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Page.css"

//Trust Output
const Trust = () => {
  return (
    <Container style={{ maxWidth: "800px"}} >
      <div className="pageheader">계약 신탁</div>
      <Row >
        <Col className="collayout"  sm={2}>소재지</Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={2}>소재지</Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={2}>소재지</Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>
      <Row >
        <Col className="collayout" sm={2}>소재지</Col>
        <Col className="collayout2"sm={10}></Col>
      </Row>
      <Row >
        <Col className="collayout" sm={2}>소재지</Col>
        <Col className="collayout2"sm={10}></Col>
      </Row>
      <Row >
        <Col className="collayout3"  sm={2}>소재지</Col>
        <Col className="collayout4" sm={10}></Col>
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
