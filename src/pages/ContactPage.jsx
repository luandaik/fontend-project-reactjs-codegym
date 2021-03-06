import React, { Component, Fragment } from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export class ContactPage extends Component {
  componentDidMount =()=>{
    window.scroll(0,0);
    window.document.title = "Contact";
  }
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Liên hệ" />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;
