import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AppUrl from '../../API/AppUrl';
import RestClient from '../../API/RestClient';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class TopBanner extends Component {
  constructor(){
    super();
    this.state={
      title:"...",
      subtitle:"...",
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.HomeTopTitleData).then(result=>{
        this.setState({
            title: result[0].home_title,
            subtitle: result[0].text_description,
        })
        
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
        <Container className="topFixedBanner p-0" fluid>
          <div className="topBannerOverlay">
            <Container className="topContent" fluid={true}>
                <Row>
                    <Col className="text-center">
                        <h1 className="topTitle">{this.state.title}</h1>
                        <h4 className="topSubTitle">{this.state.subtitle}</h4>
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
