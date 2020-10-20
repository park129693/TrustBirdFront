import React from "react";
import { Container, Card } from "react-bootstrap";
import "./Page.css"

//Service Introduce
const ServiceIntro = () => {
  return (
    <Container>
    <div className="pageheader">서비스 소개</div>
      <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   </Container>
    );
};

export default ServiceIntro;
