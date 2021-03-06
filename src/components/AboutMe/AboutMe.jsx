import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../asset/image/cricle.png";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/reponsive.css";
import { init } from "ityped";
import Jump from "react-reveal/Jump";
import Zoom from 'react-reveal/Zoom';

class AboutMe extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Hi Code Gym! My project comics VN", "Yeah!"],
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="cardInfo" >
          <Jump>
            <h1 className="serviceMainTitle text-center">Về chúng tôi</h1>{" "}
          </Jump>
          <div className="bottom"></div>
          <Row >
            <Col lg={6} md={6} sm={12}>
            <Zoom top cascade>
              <img className="aboutmeImg" src={face} alt="" />
              </Zoom>
            </Col>
            <Col lg={6} md={6} sm={12}>
            
              <div className="aboutMeBody text-center">
             
                <h2 className="aboutMeTitle" id="myElement"></h2>
               
              </div>
             
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
