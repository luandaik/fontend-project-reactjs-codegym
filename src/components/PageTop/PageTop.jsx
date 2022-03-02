import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedPage p-0" fluid>
          <div className="topPageOverlay">
            <Container className="topContentPage" fluid={true}>
              <Row>
                <Col className="text-center">
                  
                
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default PageTop;
