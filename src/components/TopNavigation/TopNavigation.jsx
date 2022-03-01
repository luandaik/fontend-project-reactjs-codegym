import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class TopNavigation extends Component {
  constructor() {
      super();
      this.state={
          navBarTitle: "navTitle",
          navBg: "navBackground",
          navBarItem:"navItem",
          navVarial:"dark",

      }
  }
  onScroll=()=>{
      if(window.scrollY>100){
          this.setState({navBarTitle: "navTitleScroll", navBg:"navBackgroundScroll",navBarItem:"navItemScroll",navVarial:"light",})
      }
      if(window.scrollY<100){
        this.setState({navBarTitle: "navTitle",navBg:"navBackground",navBarItem:"navItem",navVarial:"dark",})
      }
      console.log(this.state);

  }
  componentDidMount(){
      window.addEventListener('scroll',this.onScroll);
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
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
              COMICSVN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                {/* <Nav.Link className={this.state.navBarItem} href="#deets">DỊCH VỤ</Nav.Link> */}
                <Nav.Link className={this.state.navBarItem} href="#deets">LIST COMIC</Nav.Link>
                {/* <Nav.Link className={this.state.navBarItem} href="#deets">DANH MỤC</Nav.Link> */}
                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
