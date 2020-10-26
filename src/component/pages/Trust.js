import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Page.css"

//Trust Output
const Trust = () => {
  return (
    <Container style={{ maxWidth: "800px" , textAlign:"center"}}  >
      <div className="pageheader">신탁 신청서</div>
      <Row >
        <Col className="collayout"  sm={4}>중개인 이름</Col>
        <Col className="collayout2" sm={8}></Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={4}>중개인 번호</Col>
        <Col className="collayout2" sm={8}></Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={4}>중개인 주소</Col>
        <Col className="collayout2" sm={8}></Col>
      </Row>
      <Row >
        <Col className="collayout" sm={4}>신탁 부동산 종류</Col>
        <Col className="collayout2"sm={8}></Col>
      </Row>
      <Row >
        <Col className="collayout" sm={4}>신탁 부동산 가격</Col>
        <Col className="collayout2"sm={8}></Col>
      </Row>
      <Row >
        <Col className="collayout"  sm={4}>임대형태</Col>
        <Col className="collayout2" sm={8}></Col>
      </Row>
      <Row >
        <Col className="collayout3"  sm={4}>신탁기간</Col>
        <Col className="collayout4" sm={8}></Col>
      </Row>
      <br/>
      <div>
      <Row >
        <Col style={{ padding:"12px"}} sm={2}>기타사항</Col>
      </Row>
      <Row>
        <Col className="collayout4" sm={12}>아직 작성된게 없습니다.</Col>
      </Row>
      <br/>
      </div>
      <div>
      <Row >
        <Col style={{ padding:"12px"}} sm={2}>첨부파일</Col>
      </Row>
      <Row>
        <Col className="collayout4" sm={12}>아직 작성된게 없습니다.</Col>
      </Row>
      <br/>
      <Button
        variant="primary"
        type="submit"
        className="button1"
      >
        회원가입
      </Button>
      </div>
      <Button
        variant="primary"
        type="submit"
        className="button1"
      >
        회원가입
      </Button> <Button
        variant="primary"
        type="submit"
        className="button1"
      >
        회원가입
      </Button>
    </Container>
  );
};

export default Trust;
