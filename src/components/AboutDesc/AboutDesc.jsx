import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from '../../API/AppUrl';
import RestClient from '../../API/RestClient';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

export class AboutDesc extends Component {
  constructor(){
    super();
    this.state={
      about:"...",
      subtitle:"...",
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.AboutData).then(result=>{
        this.setState({
          about : result[0].about,
            
        })
        console.log(result);
        
    }).catch(err=>{
      this.setState({
        title: '...',
        subtitle: '...',
    })
    });
     
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col sm={12} lg={12} md={12}>
              <h1 className="serviceName">Xin chào</h1>
              <hr />
              <p className="serviceDesc">
                    {this.state.about}
                <br /><br />
                {this.state.about}
              </p>
            </Col>
            <Col sm={12} lg={12} md={12}>
              <h1 className="serviceName">Chúng tôi là</h1>
              <hr />
              <p className="serviceDesc">
              {this.state.about} <br /><br />
              {this.state.about}
                <br /><br />
                 Lorem
                 {this.state.about}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutDesc;
