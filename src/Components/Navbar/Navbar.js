import React from "react";
import "./Navbar.scss";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo/urLogo.png"

const NavigationBar = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary" className="container text-light lead">
          <Navbar.Brand href="#home" >
            <img
              alt=""
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top rounded-pill me-3 me-lg-5"
            />
            <span className=" p-2 d-3 d-sm-4 title-text-web" id="title-text-web">Book a room in CST</span>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
            <Navbar.Collapse id="responsive-navbar-nav">
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
