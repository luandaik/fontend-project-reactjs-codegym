import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {  ResponsiveContainer,BarChart, Bar ,XAxis } from 'recharts';

import "../../asset/css/custom.css";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Comic: "Japan", Point:100, },
        { Comic: "Chinese", Point:80 },
        { Comic: "USA", Point:50 },
        { Comic: "Korea", Point:50 },
      ],
    };
  }
  render() {
    const blue = "#051b35";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle text-center">Top truyện tranh</h1>
          <div className="bottom"></div>
          <Row>
            <Col  lg={6} md={12} sm={12} >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                    <XAxis dataKey="Comic"></XAxis>
                    <Bar dataKey="Point" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
