import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedPage p-0" fluid>
          <div className="topPageOverlay">
            <Container className="topContentPage" fluid={true}>
              <Row>
                <Col className="text-center">
                  <h1 className="topTitlePage">{this.props.pagetitle}</h1>
                
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
