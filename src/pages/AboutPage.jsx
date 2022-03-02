import React, { Component, Fragment } from "react";
import AboutDesc from "../components/AboutDesc/AboutDesc";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export class AboutPage extends Component {
  componentDidMount =()=>{
    window.document.title = "About";
  }
  render() {
    return (
      
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Giới thiệu" />
        <AboutDesc />
        <AboutMe />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
