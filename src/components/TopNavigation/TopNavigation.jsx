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

      }
  }
  onScroll=()=>{
      if(window.scrollY>100){
          this.setState({navBarTitle: "navTitleScroll", navBg:"navBackgroundScroll",navBarItem:"navItemScroll"})
      }
      if(window.scrollY<100){
        this.setState({navBarTitle: "navTitle",navBg:"navBackground",navBarItem:"navItem"})
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
          
          variant="dark"
        >
          <Container fluid>
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
              COMICSVN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href="#deets">TRANG CHỦ</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">GIỚI THIỆU</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">DỊCH VỤ</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">TRUYỆN TRANH</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">DANH MỤC</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">LIÊN HỆ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
