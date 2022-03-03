import {
  faAddressCard,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import swal from "sweetalert";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      address: "...",
      email: "...",
      phone: "...",
      emailInput: "",
      nameInput: "",
      messageInput: "",
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.FooterData)
      .then((result) => {
        this.setState({
          address: result[0].address,
          email: result[0].email,
          phone: result[0].phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  emailChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, emailInput: e.target.value };
    });
  };
  nameChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, nameInput: e.target.value };
    });
  };
  messageChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, messageInput: e.target.value };
    });
  };
  sendContact = () => {
    if (
      this.state.nameInput.trim() === "" ||
      this.state.emailInput.trim() === "" ||
      this.state.messageInput.trim() === ""
    ) {
      swal("Lỗi!", "Không được để trống các trường!", "error");
    } else {
      const data = {
        name: this.state.nameInput,
        email: this.state.emailInput,
        message: this.state.messageInput,
      };

      RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(data))
        .then((result) => {
          //swal("Chúc mừng!",result, "success");
          if (result === 1) {
            swal("Chúc mừng!", "Gửi thành công", "success");
          } else {
            swal("Lỗi!", "Lỗi", "error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState((prevState) => {
        return {
          ...prevState,
          emailInput: "",
          nameInput: "",
          messageInput: "",
        };
      });
    }
  };
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
                  <Form.Control
                    value={this.state.nameInput}
                    name="name"
                    onChange={this.nameChange}
                    id="name"
                    type="text"
                    placeholder="Điền vào tên của bạn"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Địa chỉ email</Form.Label>
                  <Form.Control
                    value={this.state.emailInput}
                    name="email"
                    onChange={this.emailChange}
                    id="email"
                    type="email"
                    placeholder="Điền vào email của bạn"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control
                    value={this.state.messageInput}
                    name="message"
                    onChange={this.messageChange}
                    id="message"
                    as="textarea"
                    row={3}
                    placeholder="Điền vào tin nhắn của bạn"
                  />
                </Form.Group>
                <Button
                  onClick={this.sendContact}
                  className="mt-3"
                  variant="primary"
                >
                  Gửi
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Thông tin của chúng tôi</h1>
              <p className="serviceDesc">
                <FontAwesomeIcon
                  className="contactSociol"
                  icon={faAddressCard}
                  size="1x"
                />{" "}
                Địa chỉ: {this.state.address}
              </p>
              <p className="serviceDesc">
                <FontAwesomeIcon
                  className="contactSociol"
                  icon={faMailForward}
                  size="1x"
                />
                Email: {this.state.email}
              </p>
              <p className="serviceDesc">
                <FontAwesomeIcon
                  className="contactSociol"
                  icon={faPhone}
                  size="1x"
                />
                Điện thoại: {this.state.phone}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
