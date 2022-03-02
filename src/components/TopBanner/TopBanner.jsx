import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedBanner p-0" fluid>
          <div className="topBannerOverlay">
            <Container className="topContent" fluid={true}>
                <Row>
                    <Col className="text-center">
                        <h1 className="topTitle">COMICSVN 2022</h1>
                        <h4 className="topSubTitle">Welcome to your comic world</h4>
                    </Col>
                </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
