import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import loadingIcon from '../../asset/image/loading.svg';
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

function Loading(props) {
    return (
        <Fragment>
            <Container className='text-center'>
                <Row>
                    <Col>
                    <img className='loadingAnimation' src={loadingIcon} alt="loadingIcon" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Loading;