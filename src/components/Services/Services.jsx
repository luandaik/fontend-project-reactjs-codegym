import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import oneIcon from "../../asset/image/1.png";
import twoIcon from "../../asset/image/2.png";
import treeIcon from "../../asset/image/3.png";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ServiceData)
      .then((result) => {
        this.setState({ data: result });
        //console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const listService = this.state.data;
    return (
      <Fragment>
        <Container>
          <h1 className="serviceMainTitle text-center">Dịch vụ</h1>
          <div className="bottom"></div>
          <Row>
            {listService.map((service) => (
              <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                  <img className="oneIcon" src={service.service_logo} alt="" />
                  <h2 className="serviceName">{service.service_name}</h2>
                  <p className="serviceDesc">
                    {service.service_discription}
                  </p>
                </div>
              </Col>
            ))}

           
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
