import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import Loading from "../Loading/Loading";
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
    RestClient.GetRequest(AppUrl.ServiceData)
      .then((result) => {
        this.setState({ data: result, loading: false });
        //console.log(result)
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
      const listService = this.state.data;
      return (
        <Fragment>
          <Container>
          <Jump>
            <h1 className="serviceMainTitle text-center">Dịch vụ</h1>
            <div className="bottom"></div>
            </Jump>
            <Row>
              {listService.map((service) => (
                
                <Col lg={4} md={6} sm={12}>
                  <Zoom top>
                  <div className="serviceCard text-center">
                    <img
                      className="oneIcon"
                      src={service.service_logo}
                      alt=""
                    />
                    <h2 className="serviceName">{service.service_name}</h2>
                    <p className="serviceDesc">{service.service_discription}</p>
                  </div>
                  </Zoom>
                </Col>
                
              ))}
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default Services;
