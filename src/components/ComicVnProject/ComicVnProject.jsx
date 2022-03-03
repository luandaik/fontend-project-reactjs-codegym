import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import "../../asset/css/reponsive.css";

class ComicVnProject extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      RestClient.GetRequest(AppUrl.NewComicData)
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
      const listComic = this.state.data;
      console.log(listComic);
      return (
        <Fragment>
          
          <Container className="text-center">
          <Jump><h1 className="serviceMainTitle">Comicvn mới ra mắt</h1>
            <div className="bottom"></div></Jump>
            <Row>
              {listComic.map((comic) => (
                <Col lg={4} md={6} sm={12}>
                  <Link
                    className="cardUrl"
                    to={`payment/${comic.id}/${comic.long_title}`}
                  > 
                  <Fade left big cascade>
                    <Card className="comicCard">
                      <Card.Img
                        variant="top"
                        className="comicCardImg"
                        src={comic.short_img}
                      />
                      <Card.Body>
                     
                      <Fade top big cascade><Card.Title>{comic.long_title}</Card.Title></Fade>
                      <Fade bot big cascade> <Card.Text>{comic.short_description}</Card.Text></Fade>
                       
                      </Card.Body>
                    </Card>
                    </Fade>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
         
        </Fragment>
      );
    }
  }
}

export default ComicVnProject;
