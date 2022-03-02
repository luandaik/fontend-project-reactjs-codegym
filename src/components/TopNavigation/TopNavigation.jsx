import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBg: "navBackground",
      navBarItem: "navItem",
      navVarial: "dark",
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBg: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVarial: "light",
      });
    } else {
      this.setState({
        navBarTitle: "navTitle",
        navBg: "navBackground",
        navBarItem: "navItem",
        navVarial: "dark",
      });
    }
  };
  componentDidMount() {
    
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBg: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVarial: "light",
      });
    } else {
      this.setState({
        navBarTitle: "navTitle",
        navBg: "navBackground",
        navBarItem: "navItem",
        navVarial: "dark",
      });
    }
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <Navbar
          className={this.state.navBg}
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={this.state.navVarial}
        >
          <Container fluid>
            <Navbar.Brand className={this.state.navBarTitle} href="/">
              COMICSVN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  {" "}
                  <NavLink
                    exact="true"
                    className={this.state.navBarItem}
                    to="/"
                  >
                    HOME
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <NavLink
                    exact="true"
                    className={this.state.navBarItem}
                    to="/about"
                  >
                    ABOUT
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <NavLink
                    exact="true"
                    className={this.state.navBarItem}
                    to="/service"
                  >
                    SERVICE
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <NavLink
                    exact="true"
                    className={this.state.navBarItem}
                    to="/comics"
                  >
                    LIST COMIC
                  </NavLink>
                </Nav.Link>
                {/* <Nav.Link className={this.state.navBarItem} href="#deets">DANH MỤC</Nav.Link> */}
                <Nav.Link>
                  {" "}
                  <NavLink
                    exact="true"
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                    to="/contact"
                  >
                    CONTACT
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
