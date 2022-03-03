import {
  faCertificate,
  faHeart,
  faSquareCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import Loading from "../Loading/Loading";
import Zoom from "react-reveal/Zoom";
import HeadShake from 'react-reveal/HeadShake';

class Summany extends Component {
  constructor() {
    super();
    this.state = {
      total_sell: 0,
      total_conscious: 0,
      total_comic: 0,
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      RestClient.GetRequest(AppUrl.TotalHomeData)
        .then((result) => {
          this.setState({
            total_sell: result[0].total_sell,
            total_conscious: result[0].total_conscious,
            total_comic: result[0].total_comic,
            loading: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  }
  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Container className="summanyFixedBanner p-0" fluid>
            <div className="summanyBannerOverlay">
              <Container className="text-center">
                <Row>
                  <Col lg={8} md={6} sm={12}>
                    <Row className="countSection">
                    
                      <Col>
                      <Zoom top>
                        <FontAwesomeIcon
                          className="iconProject"
                          icon={faStar}
                        />
                        <h1 className="countNumber">
                          <CountUp start={0} end={this.state.total_sell}>
                            {({ countUpRef, start }) => (
                              <ReactVisibilitySensor
                                onChange={start}
                                delayedCall
                              >
                                <span ref={countUpRef} />
                              </ReactVisibilitySensor>
                            )}
                          </CountUp>
                          +
                        </h1>

                        <h4 className="countTitle">
                          Số lượng truyện được bán ra
                        </h4>
                        <hr className="bg-white w-30" />
                        </Zoom>
                      </Col>
                      
                      
                      <Col>
                      <Zoom top>
                        <FontAwesomeIcon
                          className="iconProject"
                          icon={faHeart}
                        />
                        <h1 className="countNumber">
                          <CountUp start={0} end={this.state.total_conscious}>
                            {({ countUpRef, start }) => (
                              <ReactVisibilitySensor
                                onChange={start}
                                delayedCall
                              >
                                <span ref={countUpRef} />
                              </ReactVisibilitySensor>
                            )}
                          </CountUp>
                        </h1>
                        <h4 className="countTitle">
                          Khách hàng tại 64 tỉnh thành
                        </h4>
                        <hr className="bg-white w-30" />
                        </Zoom>
                      </Col>
                      
                      
                      <Col>
                      <Zoom top>
                        <FontAwesomeIcon
                          className="iconProject"
                          icon={faCertificate}
                        />
                        <h1 className="countNumber">
                          <CountUp start={0} end={this.state.total_comic}>
                            {({ countUpRef, start }) => (
                              <ReactVisibilitySensor
                                onChange={start}
                                delayedCall
                              >
                                <span ref={countUpRef} />
                              </ReactVisibilitySensor>
                            )}
                          </CountUp>
                          +
                        </h1>
                        <h4 className="countTitle">
                          Số truyện được mua bản quyền
                        </h4>
                        <hr className="bg-white w-30" />
                        </Zoom>
                      </Col>
                     
                    </Row>
                    
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                  <HeadShake>
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
                    </HeadShake>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </Fragment>
      );
    }
  }
}

export default Summany;
