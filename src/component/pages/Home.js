import React from "react";
import Homeimage from "../icons/Homeimage";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import ReactFullpage from '@fullpage/react-fullpage'
import "./Page.css"
import ServiceIntro from "./ServiceIntro"
import FoundationIntro from "./FoundationIntro"

//Home
const Home = () => {
  return(
 
  <ReactFullpage
  //fullpage options
  scrollingSpeed = {1000} /* Options here */

  render={({ state, fullpageApi }) => {
    return (
      <Container >
      <ReactFullpage.Wrapper>
        <div className="section" style={{maxWidth: "1200px"}}>
          <Homeimage />
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Click me to move down
          </button>
        </div>
        <div className="section">
          <ServiceIntro />
        </div>
        <div className="section">
          <FoundationIntro />
        </div>
      </ReactFullpage.Wrapper>
      </Container>
    );
  }}
/>
  );
};

export default Home;
