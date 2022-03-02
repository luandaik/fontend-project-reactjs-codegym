import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../API/AppUrl";
import RestClient from "../../API/RestClient";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class ComicVnProject extends Component {
  constructor(){
    super();
    this.state={
      data: [],
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.NewComicData)
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
   console.log(listComic);
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Comicvn mới ra mắt</h1>
          <div className="bottom"></div>
          <Row>
          {listComic.map((comic) => (
              <Col lg={4} md={6} sm={12}>
              <Link className="cardUrl" to={`payment?id=${comic.id}`} >
              <Card className="comicCard">
                <Card.Img
                  variant="top"
                  className="comicCardImg"
                  src={comic.short_img}
                />
                <Card.Body>
                  <Card.Title>{comic.long_title}</Card.Title>
                  <Card.Text>
                    {comic.short_description}
                  </Card.Text>
                 
                </Card.Body>
              </Card>
              </Link>
            </Col>
            ))}
            
           
            
            
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ComicVnProject;
