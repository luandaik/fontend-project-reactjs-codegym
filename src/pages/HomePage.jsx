import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summany from "../components/Summany/Summany";
import ComicVnProject from "../components/ComicVnProject/ComicVnProject";
import Comics from "../components/Comics/Comics";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
  componentDidMount =()=>{
    window.document.title = "Home";
  }
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopBanner />
        <Services />
        <Analysis />
        <Summany />
        <ComicVnProject />
        <Comics />
        <AboutMe />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
