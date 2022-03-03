import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AppUrl from '../../API/AppUrl';
import RestClient from '../../API/RestClient';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import Loading from "../Loading/Loading";
import Slide from 'react-reveal/Slide';

class TopBanner extends Component {
  constructor(){
    super();
    this.state={
      title:"...",
      subtitle:"...",
      loading: true,
    }
  }
  componentDidMount(){
    setTimeout(() => {
    RestClient.GetRequest(AppUrl.HomeTopTitleData).then(result=>{
        this.setState({
            title: result[0].home_title,
            subtitle: result[0].text_description,
            loading: false,
        })
        
    }).catch(err=>{
      this.setState({
        title: '...',
        subtitle: '...',
    })
    });
  }, 500);
     
  }
  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
    return (
      <Fragment>
        <Container className="topFixedBanner p-0" fluid>
          <div className="topBannerOverlay">
            <Container className="topContent" fluid={true}>
                <Row>
                    <Col className="text-center">
                        <Slide top>
                        <h1 className="topTitle">{this.state.title}</h1>
                        </Slide>
                        <Slide top>
                        <h4 className="topSubTitle">{this.state.subtitle}</h4>
                        </Slide>
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

export default TopBanner;
