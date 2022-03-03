import React, { Fragment } from 'react';
import ErrorUrl from '../components/ErrorUrl/ErrorUrl';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';


function PageNotFound(props) {
    return (
        <Fragment>
            <TopNavigation />
            <PageTop/>
            <ErrorUrl/>
            <Footer/>
        </Fragment>
    );
}

export default PageNotFound;