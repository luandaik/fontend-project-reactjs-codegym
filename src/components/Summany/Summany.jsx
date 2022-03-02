import {
  faCertificate, faHeart, faSquareCheck,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CountUp from 'react-countup';
import ReactVisibilitySensor from "react-visibility-sensor";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

class Summany extends Component {
  render() {
    return (
      <Fragment>
        <Container className="summanyFixedBanner p-0" fluid>
          <div className="summanyBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faStar} />
                      <h1 className="countNumber">
                        <CountUp start={0} end={100000}>
                          {({ countUpRef, start }) => (
                           <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                             </ReactVisibilitySensor>
                          
                          )}
                        </CountUp>+
                      </h1>
                      <h4 className="countTitle">
                        Số lượng truyện được bán ra
                      </h4>
                      <hr className="bg-white w-30" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faHeart} />
                      <h1 className="countNumber">
                      <CountUp start={0} end={64}>
                          {({ countUpRef, start }) => (
                           <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                             </ReactVisibilitySensor>
                          
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">
                        Khách hàng tại 64 tỉnh thành
                      </h4>
                      <hr className="bg-white w-30" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon
                        className="iconProject"
                        icon={faCertificate}
                      />
                      <h1 className="countNumber">
                      <CountUp start={0} end={10000}>
                          {({ countUpRef, start }) => (
                           <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                             </ReactVisibilitySensor>
                          
                          )}
                        </CountUp>+
                      </h1>
                      <h4 className="countTitle">
                        Số truyện được mua bản quyền
                      </h4>
                      <hr className="bg-white w-30" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        Từ nhiều quốc gia
                      </Card.Title>
                      <Card.Text className="cardSubTitle">
                        <p>
                          <FontAwesomeIcon
                            className="iconBullent text-justify"
                            icon={faSquareCheck}
                          />
                          Nhật Bản
                        </p>
                        <p>
                          <FontAwesomeIcon
                            className="iconBullent text-justify"
                            icon={faSquareCheck}
                          />
                          Trung Quốc
                        </p>
                        <p>
                          <FontAwesomeIcon
                            className="iconBullent text-justify"
                            icon={faSquareCheck}
                          />
                          Hàn Quốc
                        </p>
                        <p>
                          <FontAwesomeIcon
                            className="iconBullent text-justify"
                            icon={faSquareCheck}
                          />
                          Mỹ
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summany;
