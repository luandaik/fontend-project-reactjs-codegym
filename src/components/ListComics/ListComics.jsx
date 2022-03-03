import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Fade from 'react-reveal/Fade';


class ListComics extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      RestClient.GetRequest(AppUrl.AllComicData)
        .then((result) => {
          this.setState({ data: result, loading: false });
          console.log(result);
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
      const listComic = this.state.data;
      return (
        <Fragment>
          <h1 className="serviceMainTitle text-center">
            Danh sách truyện tranh
          </h1>
          <div className="bottom"></div>
          <Container>
            <Row>
              {listComic.map((comic) => (
                
                <Col lg={6} md={12} sm={12} className="p-2">
                  <Fade right cascade>
                  <Row>
                    <Col lg={6} md={6} sm={12}>
                      <img
                        className="comicImg comicCardImg"
                        src={comic.short_img}
                        alt=""
                      />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <h5 className="text-justify serviceName">
                        {comic.long_title}
                      </h5>
                      <p className="text-justify serviceDesc">
                        {comic.long_description}
                      </p>
                      <Link
                        to={`/payment/${comic.id}/${comic.long_title}`}
                        className="comicBuy"
                      >
                        Mua truyện
                      </Link>
                    </Col>
                  </Row>
                  </Fade>
                </Col>
                
              ))}
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default ListComics;
