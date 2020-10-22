import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./Page.css";

//Contract Output
const Contract = () => {
  return (
    <div className="containerborder">
    <Container style={{ maxWidth: "800px", textAlign:"center"}} >
      <div className="pageheader">계약서 보기</div>
      <Row  >
        <Col className="collayout"  sm={2}>소재지</Col>

        <Col className="collayout2" sm={10}></Col>
      </Row>
      <Row>
        <Col className="collayout" sm={2}>
          토지
        </Col>
        <Col className="collayout" sm={2}>
          지목
        </Col>
        <Col className="collayout" sm={2}>
          건축물
        </Col>
        <Col className="collayout" sm={3}>
          1
        </Col>
        <Col className="collayout2" sm={3}>
          1
        </Col>
      </Row>
      <Row>
        <Col className="collayout" sm={2}>
          토지
        </Col>
        <Col className="collayout" sm={2}>
          지목
        </Col>
        <Col className="collayout" sm={2}>
          건축물
        </Col>
        <Col className="collayout" sm={3}>
          1
        </Col>
        <Col className="collayout2" sm={3}>
          1
        </Col>
      </Row>
      <Row>
        <Col className="collayout" sm={2}>
          토지
        </Col>
        <Col className="collayout" sm={4}>
          지목
        </Col>
        <Col className="collayout" sm={3}>
          1
        </Col>
        <Col className="collayout2" sm={3}>
          1
        </Col>
      </Row>
      <Row>
        <Col className="collayout" sm={2}>
          소재지
        </Col>
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
      <Row>
        <Col className="collayout" sm={2}>
          소재지
        </Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>
      <Row>
        <Col className="collayout" sm={2}>
          소재지
        </Col>
        <Col className="collayout2" sm={10}></Col>
      </Row>
      <Row>
        <Col className="collayout3" sm={2}>
          소재지
        </Col>
        <Col className="collayout4" sm={10}></Col>
      </Row>
      <br/>
      <div>
      <Row >
        <Col  sm={2}>기타사항</Col>
      </Row>
      <Row>
        <Col className="collayout4" sm={12}>아직 작성된게 없습니다.</Col>
      </Row>
      <br/>
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
        <br/>
      <div>
      <Row >
        <Col  sm={2}>첨부파일</Col>
      </Row>
      <Row>
        <Col className="collayout4" sm={12}>아직 작성된게 없습니다.</Col>
      </Row>
      <br/>
      </div>

    </Container>
    </div>
  );
};

export default Contract;
