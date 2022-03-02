import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'

class ComicPayment extends Component {
  
  render() {
    

    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col lg={8} md={6} sm={12} className="p-2">
              <h1 className="comicPaymentText">Thám tử lừng danh Conan </h1>
              <img className="comicPaymentImg" src="https://cf.shopee.vn/file/510df9c4781fec3532c03c59a355eaf0" />
              <br></br> <br></br>
              <p className="comicPaymentDesc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="widget_feature">
                <h4 class="widget-title text-center">Thanh toán truyện</h4>
                <hr />
                <ul>
                  <li>
                    <FontAwesomeIcon className="iconBullent" icon={faUser} />{" "}
                    <span> Đã mua :</span> 1 người
                  </li>
                  <li>
                    <FontAwesomeIcon className="iconBullent" icon={faClone} />{" "}
                    <span>Thể loại:</span> Truyện tranh Nhật Bản
                  </li>

                  <li>
                    <FontAwesomeIcon className="iconBullent" icon={faTags} />{" "}
                    <span>Tags:</span> Comic
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="iconBullent"
                      icon={faCheckSquare}
                    />{" "}
                    <span>Tác giả:</span> Gosho Aoyama
                  </li>
                </ul>
                <div class="price-wrap text-center">
                  <h5>
                    Giá:<span> 100.000 VNĐ</span>
                  </h5>
                  <Button variant="warning">Thanh toán ngay</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ComicPayment;
