import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class ComicVnProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Comicvn mới ra mắt</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="comicCard">
                <Card.Img
                  variant="top"
                  className="comicCardImg"
                  src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2020/7/13/cf2-15946070480971138614299.png"
                />
                <Card.Body>
                  <Card.Title>Thám tử lừng danh Conan</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Mua truyện</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card  className="comicCard">
                <Card.Img
                  variant="top"
                  className="comicCardImg"
                  src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_04_thumbnailtitle-34c529eff5b7-1609395196058-lnUOAYKO.png?v=0"
                />
                <Card.Body>
                  <Card.Title>Doraemon</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Mua truyện</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="comicCard">
                <Card.Img
                  className="comicCardImg"
                  variant="top"
                  src="https://msmobile.com.vn/upload_images/images/tai-hinh-nen-vua-hai-tac-dep-nhat-22.png"
                />
                <Card.Body>
                  <Card.Title>Vua hải tặc</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Mua truyện</Button>
                </Card.Body>
              </Card>
            </Col>
            
            
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ComicVnProject;
