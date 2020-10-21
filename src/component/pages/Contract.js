import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./Page.css";

//Contract Output
const Contract = () => {
  return (
    <Container style={{ maxWidth: "800px", border:"1px solid #3b72f2"}}>
      <div className="pageheader">계약서 보기</div>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>소재지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={10}></Col>
      </Row>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>토지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>지목</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>건축물</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={3}>1</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={3}>1</Col>
      </Row>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>토지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>지목</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>건축물</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={3}>1</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={3}>1</Col>
      </Row>
      <Row >
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={2}>토지</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={4}>지목</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={3}>1</Col>
        <Col style={{ border: "1px solid", borderCollapse:"collapse"  }} sm={3}>1</Col>
      </Row>
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
      <Form className="sign-form">
        <Form.Group >
          <Form.Label>기타 사항</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>

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

        <Form.Group>
          <Form.Label>첨부 파일</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contract;
