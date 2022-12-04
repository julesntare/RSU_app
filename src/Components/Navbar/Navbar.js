import React, { useLayoutEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo/urLogo.png";
import {Link, useMatch, useResolvedPath} from "react-router-dom" ;
import Filter from '../Filter/Filter';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar  () {
  const [logedIn, setLogedIn] =useState(true); // check if the user has logged in
  const [hideFilter, setHideFilter] =useState(true);
  const handleHideFilter =()=>{
    setHideFilter(false);
  }
  //get rid of filters in some nav links
  let locationPath = window.location.pathname;
  useLayoutEffect(()=>{
    if(locationPath === "/" || locationPath === "/maps" || locationPath === "/timetable" || locationPath ==="/enquiry" ){
      setHideFilter(false);
    }
  },[]);
const showFilter = ()=>{
  setHideFilter(true);
}
    return (
        <>
         <Navbar bg="light" expand="lg" className="nav-web text-white px-3 d-flex justify-content-between  mt-0 mb-1">
            <Link to="/" onClick={handleHideFilter}>
                <img
                  alt=""
                  width="50px"
                  height ="50px"
                  src={Logo}
                  className="d-inline-block align-top me-lg-5 rounded-pill mg-fluid "
                />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                  <li className="nav-item ms-3 ms-xl-5" >
                    <ActiveLink to ="/" onClick={handleHideFilter}>Home</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5" >
                    <ActiveLink to ="/allrooms" onClick={showFilter}>Rooms</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5">
                    <ActiveLink to ="/timetable" onClick={handleHideFilter}>Timetable</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5" >
                    <ActiveLink to ="/bookings" onClick={showFilter}>Bookings</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5">
                    <ActiveLink to ="/maps"  onClick={handleHideFilter}>Maps</ActiveLink>
                  </li>
                  <li className="nav-item ms-3  me-auto ms-xxl-5 " >
                    <ActiveLink to ="/enquiry" onClick={handleHideFilter}>Enquiry</ActiveLink>
                  </li>
                  <li className="nav-item  ms-lg-5">
                    <button className=" text-white btn-login">
                      <ActiveLink to ="/login">
                        {logedIn? "Login " : <i className="bi ms-1 bi-person-circle"></i>}
                      </ActiveLink>
                    </button>
                  </li>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        {hideFilter && 
      <Filter />
        }
    </>
    )
  }
const ActiveLink = ({to, children, ...props})=>{
  const truePath = useResolvedPath(to);
  const isActive = useMatch({path: truePath.pathname, end: true});
  return <Link className={isActive?"nav-link active" : "nav-link" } to={to} {...props}>{children} </Link> 
}
