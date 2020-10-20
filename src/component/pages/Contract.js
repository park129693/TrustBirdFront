import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./Page.css";

//Contract Output
const Contract = () => {
  return (
    <Container style={{ maxWidth: "800px" }}>
      <div className="pageheader">계약서 보기</div>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>소재지</Col>
        <Col sm={10}></Col>
      </Row>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>토지</Col>
        <Col sm={2}>지목</Col>
        <Col sm={2}>건축물</Col>
        <Col sm={3}>1</Col>
        <Col sm={3}>1</Col>
      </Row>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>토지</Col>
        <Col sm={2}>지목</Col>
        <Col sm={2}>건축물</Col>
        <Col sm={3}>1</Col>
        <Col sm={3}>1</Col>
      </Row>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>토지</Col>
        <Col sm={4}>지목</Col>
        <Col sm={3}>1</Col>
        <Col sm={3}>1</Col>
      </Row>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>소재지</Col>
        <Col sm={10}></Col>
      </Row>{" "}
      <Row style={{ border: "solid" }}>
        <Col sm={2}>소재지</Col>
        <Col sm={10}></Col>
      </Row>{" "}
      <Row style={{ border: "solid" }}>
        <Col sm={2}>소재지</Col>
        <Col sm={10}></Col>
      </Row>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>소재지</Col>
        <Col sm={10}></Col>
      </Row>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>소재지</Col>
        <Col sm={10}></Col>
      </Row>
      <Row style={{ border: "solid" }}>
        <Col sm={2}>소재지</Col>
        <Col sm={10}></Col>
      </Row>
      <Form>
        <Form.Group>
          <Form.Label>기타 사항</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>

        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>
        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>
        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>
        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>

        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>
        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>
        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>
        <Row style={{ border: "solid" }}>
          <Col sm={2}>소재지</Col>
          <Col sm={10}></Col>
        </Row>

        <Form.Group>
          <Form.Label>첨부 파일</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contract;
