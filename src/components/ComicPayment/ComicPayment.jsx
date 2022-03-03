import { faCheckSquare, faClone, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import Loading from "../Loading/Loading";




function ComicPayment(props) {
  const {dataComic} = props;
  console.log(dataComic);
   if (dataComic===null) {
      return <Loading />;
    } else {
  return (
    <Fragment>
    <Container className="text-center">
      <Row>
        <Col lg={8} md={6} sm={12} className="p-2">
          <h1 className="comicPaymentText">{dataComic.long_title} </h1>
          <img className="comicPaymentImg" src={dataComic.short_img} />
          <br></br> <br></br>
          <p className="comicPaymentDesc">{dataComic.long_description}</p>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="widget_feature">
            <h4 class="widget-title text-center">Thanh toán truyện</h4>
            <hr />
            <ul>
              <li>
                <FontAwesomeIcon className="iconBullent" icon={faUser} />{" "}
                <span> Đã mua :</span> {dataComic.total_buy}
              </li>
              <li>
                <FontAwesomeIcon className="iconBullent" icon={faClone} />{" "}
                <span>Thể loại:</span> {dataComic.type_comic}
              </li>

              <li>
                <FontAwesomeIcon className="iconBullent" icon={faTags} />{" "}
                <span>Tags:</span> {dataComic.tag_comic}
              </li>

              <li>
                <FontAwesomeIcon
                  className="iconBullent"
                  icon={faCheckSquare}
                />{" "}
                <span>Tác giả:</span> {dataComic.author_comic}
              </li>
            </ul>
            <div class="price-wrap text-center">
              <h5>
                Giá:<span> {dataComic.price_comic} VNĐ</span>
              </h5>
              <Button variant="warning">Thanh toán ngay</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
  );
    }
}

export default ComicPayment;



