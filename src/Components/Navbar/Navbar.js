import React from "react";
import "./Navbar.scss";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo/urLogo.png"

const NavigationBar = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" variant="primary" className="container nav-web text-white lead">
          <Navbar.Brand href="#home"  className="d-flex justify-content-center align-items-center">
            <img
              alt=""
              src={Logo}
              className="d-inline-block  align-top rounded-pill me-3 img-fluid me-lg-5"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav "  />
            <Navbar.Collapse id="responsive-navbar-nav">
            <h1 className="text-center ms-auto  p-2 fs-4 fs-lg-5 d-sm-4 fw-bold" id="title-text-web">Book a room in CST</h1>
              <Nav className="ms-auto mx-5">
                <NavDropdown title="Buildings" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">See free Rooms</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    See all rooms
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );

}
export default NavigationBar;
