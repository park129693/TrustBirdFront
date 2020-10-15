import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

//Home
const Home = () => {
  return (
    <Container>
      <div>
        <Row>
          <Col
            style={{
              margintop: 139,
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            우리는 당연한 일을 해드리는거죠
            <br />
            당신의 불편한 일들을
          </Col>
        </Row>
        <Button href="./ServiceIntro"> 서비스소개</Button>
      </div>

      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Home;
