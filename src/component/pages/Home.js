import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ReactFullpage from '@fullpage/react-fullpage'
import "./Page.css"

//Home
const Home = () => {
  return(
 
  <ReactFullpage
  //fullpage options
  scrollingSpeed = {1000} /* Options here */

  render={({ state, fullpageApi }) => {
    return (
      <Container>
      <ReactFullpage.Wrapper>
        <div className="section">
          <p>Section 1 (welcome to fullpage.js)</p>
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Click me to move down
          </button>
        </div>
        <div className="section">
          <p>Section 2</p>
        </div>
      </ReactFullpage.Wrapper>
      </Container>
    );
  }}
/>
  );
};

export default Home;
