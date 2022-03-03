import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import "../../asset/css/reponsive.css";

ErrorUrl.propTypes = {
    
};

function ErrorUrl(props) {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className='text-center m-4'>
                       <h1 className='serviceName'>Trang này không tồn tại</h1>
                       <h1 className='notfound'>404</h1> 
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ErrorUrl;