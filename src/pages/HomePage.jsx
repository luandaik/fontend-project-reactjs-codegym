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
    window.scroll(0,0);
    window.document.title = "Home";
  }
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopBanner />
        <ComicVnProject />
        <Comics />
        <Services />
        {/* <Analysis /> */}
        <Summany />
        
       
        <AboutMe />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
