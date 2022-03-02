import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Comics extends Component {
  constructor(){
    super();
    this.state={
      data: [],
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.HomeComicData)
      .then((result) => {
        this.setState({ data: result });
        //console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
     
  }
  render() {
    const listComic = this.state.data;
    return (
      <Fragment>
        <h1 className="serviceMainTitle text-center">Danh sách truyện tranh</h1>
        <div className="bottom"></div>
        <Container>
          <Row>
          {listComic.map((comic) => (
            <Col lg={6} md={12} sm={12} className="p-2">
              <Row>
                <Col lg={6} md={6} sm={12}>
                    <img className="comicImg comicCardImg" src={comic.short_img}  alt="" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">{comic.long_title}</h5>
                  <p className="text-justify serviceDesc">
                       {comic.short_description}
                  </p>
                  <Link to={`payment?id=${comic.id}`} className="comicBuy">Mua truyện</Link>
                </Col>
              </Row>
            </Col>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Comics;
