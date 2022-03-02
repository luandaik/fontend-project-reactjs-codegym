import React, { Component, Fragment } from "react";
import { Route, Routes  } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ListComicsPage from "../pages/ListComicsPage";
import ListService from "../pages/ListService";

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes >
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/about" element={<AboutPage/>}></Route>
          <Route exact path="/comics" element={<ListComicsPage/>} ></Route>
          <Route exact path="/contact" element={<ContactPage/>} ></Route>
          <Route exact path="/service" element={<ListService/>} ></Route>
        </Routes >
      </Fragment>
    );
  }
}

export default AppRoute;
