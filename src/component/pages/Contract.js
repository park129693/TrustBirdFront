import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./Page.css";

//Contract Output
const Contract = () => {
  return (
    <Container style={{ maxWidth: "800px"}} >
      <div className="pageheader">계약서 보기</div>
      <Row >
        <Col className="collayout"  sm={2}>소재지</Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>  
      <Row >
        <Col className="collayout"  sm={2}>토지</Col>
        <Col className="collayout"  sm={2}>지목</Col>
        <Col className="collayout"  sm={2}>건축물</Col>
        <Col className="collayout"  sm={3}>1</Col>
        <Col className="collayout2"  sm={3}>1</Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={2}>토지</Col>
        <Col className="collayout"  sm={2}>지목</Col>
        <Col className="collayout"  sm={2}>건축물</Col>
        <Col className="collayout"  sm={3}>1</Col>
        <Col className="collayout2" sm={3}>1</Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={2}>토지</Col>
        <Col className="collayout"  sm={4}>지목</Col>
        <Col className="collayout"  sm={3}>1</Col>
        <Col className="collayout2" sm={3}>1</Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={2}>소재지</Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>{" "}
      <Row >
        <Col className="collayout"  sm={2}>소재지</Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>{" "}
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
      <div>기타사항
      <Col className="collayout4"  sm={12}>dskfjslfd</Col>
      </div>
        <Row >
          <Col className="collayout" sm={2}>소재지</Col>
          <Col className="collayout2" sm={10}></Col>
        </Row>
        <Row >
          <Col className="collayout" sm={2}>소재지</Col>
          <Col className="collayout2" sm={10}></Col>
        </Row>
        <Row >
          <Col className="collayout" sm={2}>소재지</Col>
          <Col className="collayout2" sm={10}></Col>
        </Row>
        <Row >
          <Col className="collayout" sm={2}>소재지</Col>
          <Col className="collayout2" sm={10}></Col>
        </Row>

        <Row >
          <Col className="collayout" sm={2}>소재지</Col>
          <Col className="collayout2" sm={10}></Col>
        </Row>
        <Row >
          <Col className="collayout" sm={2}>소재지</Col>
          <Col className="collayout2" sm={10}></Col>
        </Row>
        <Row >
          <Col className="collayout" sm={2}>소재지</Col>
          <Col className="collayout2" sm={10}></Col>
        </Row>
        <Row >
          <Col className="collayout3" style={{borderRightStyle: "hidden",}}sm={2}>소재지</Col>
          <Col className="collayout4" sm={10}></Col>
        </Row>

        <Form.Group>
          <Form.Label>첨부 파일</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
    
    </Container>
  );
};

export default Contract;
