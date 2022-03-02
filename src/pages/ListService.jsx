import React, { Component, Fragment } from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class ListService extends Component {
  componentDidMount =()=>{
    window.scroll(0,0);
    window.document.title = "Service";
  }
  render() {
    return (
      <Fragment>
        <Fragment>
          <TopNavigation />
          <PageTop pagetitle="Dịch vụ" />
          <Services />
          <Contact />
          <Footer />
        </Fragment>
      </Fragment>
    );
  }
}

export default ListService;
