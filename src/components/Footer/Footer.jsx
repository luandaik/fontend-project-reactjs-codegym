import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from '../../API/AppUrl';
import RestClient from '../../API/RestClient';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(){
    super();
    this.state={
      facebook:"",
      youtube:"",
      twitter:"",
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
        this.setState({
          facebook: result[0].facebook,
          youtube: result[0].twitter,
          twitter: result[0].youtube,
        })
        
        
    }).catch(err=>{
        console.log(err);
    });
     
  }
  render() {
   
    return (
      <Fragment>
        <Container fluid className="footerSection">
          <Row>
            <Col lg={6} md={6} sm={12} className="text-center">
              <h2 className="footerName text-center">Folow us</h2>
              <div className="social-container">
                <Link to={this.state.facebook}>
                  <FontAwesomeIcon className="social" icon={faFacebook} size="2x" />
                </Link>
                <Link to={this.state.youtube}>
                  <FontAwesomeIcon className="social" icon={faYoutube} size="2x" />
                </Link>
                <Link to={this.state.twitter}>
                  <FontAwesomeIcon className="social" icon={faTwitter} size="2x" />
                </Link>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className='text-center'>
              <h2 className="footerName ">ComicVN</h2>
              <div className="social-container">
              <p className="social">Trang web truyện tranh hàng đầu Việt Nam</p>
              </div>
            </Col>
          
          </Row>
        </Container>
         <Container className="text-center copyrightSection" fluid>
                <p className="social">© Copyright 2022 project comicVN, All Right Reserverd</p>
         </Container>
      </Fragment>
    );
  }
}

export default Footer;
