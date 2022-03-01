import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faMailForward, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container> 
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Liên hệ nhanh</h1>
              <Form>
                <Form.Group>
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control type="text" placeholder="Điền vào tên của bạn" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Địa chỉ email</Form.Label>
                  <Form.Control type="email" placeholder="Điền vào email của bạn" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control as="textarea" row={3} placeholder="Điền vào tin nhắn của bạn" />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                  Gửi
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Thông tin của chúng tôi</h1>
              <p className="serviceDesc"><FontAwesomeIcon className="contactSociol" icon={faAddressCard} size="1x" /> Địa chỉ: Tổi xxx khu xxx phường xxx</p>
              <p className="serviceDesc"><FontAwesomeIcon className="contactSociol" icon={faMailForward} size="1x" />Email: xxx@xx.xxx</p>
              <p className="serviceDesc"><FontAwesomeIcon className="contactSociol" icon={faPhone} size="1x" />Điện thoại: 0123456789</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
