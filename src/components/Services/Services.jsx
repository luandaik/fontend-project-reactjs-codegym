import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import oneIcon from "../../asset/image/1.png";
import twoIcon from "../../asset/image/2.png";
import treeIcon from "../../asset/image/3.png";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="serviceMainTitle text-center">Dịch vụ</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="oneIcon" src={oneIcon} alt="" />
                <h2 className="serviceName">Giao hàng</h2>
                <p className="serviceDesc">
                  Vận chuyển các ngày trong tuần kể cả chủ nhật
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="twoIcon" src={twoIcon} alt="" />
                <h2 className="serviceName">Giá sốc</h2>
                <p className="serviceDesc">
                  Mua truyện rẻ nhất trên thị trường
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="treeIcon" src={treeIcon} alt="" />
                <h2 className="serviceName">Hỗ trợ</h2>
                <p className="serviceDesc">
                  Đường dây nóng <b>0123456789123</b>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
