import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="footerSection">
          <Row>
            <Col lg={6} md={6} sm={12} className="text-center">
              <h2 className="footerName text-center">Folow us</h2>
              <div className="social-container">
                <a href="">
                  <FontAwesomeIcon className="social" icon={faFacebook} size="2x" />
                </a>
                <a href="">
                  <FontAwesomeIcon className="social" icon={faYoutube} size="2x" />
                </a>
                <a href="">
                  <FontAwesomeIcon className="social" icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className='text-center'>
              <h2 className="footerName ">ComicVN</h2>
              <div className="social-container">
              <p className="social">Trang web truyện tranh hàng đầu Việt Nam</p>
              </div>
            </Col>
          
          </Row>
        </Container>
         <Container className="text-center copyrightSection" fluid>
                <p className="social">© Copyright 2022 project comicVN, All Right Reserverd</p>
         </Container>
      </Fragment>
    );
  }
}

export default Footer;
