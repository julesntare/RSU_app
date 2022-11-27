import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo/urLogo.png";
import {Link, useMatch, useResolvedPath} from "react-router-dom" ;
import Filter from '../Filter/Filter';


export default function NavBar  () {
  window.onscroll = ()=> myFunction();
  const [sticky, setSticky] = useState("navbar container filter  d-flex  p-2 w-100")



function myFunction() {
  if (window.pageYOffset >= 90) {
    setSticky(" navbar container filter  d-flex  p-2  w-100 sticky ");
  } else {
    setSticky("navbar container filter  d-flex w-100 p-2 mt-3");

  }
}

    return (
      <>
        <nav className="navbar container navbar-expand-lg nav-web text-white px-3 d-flex justify-content-between  mt-0 mb-1">
            <img
              alt=""
              width="50px"
              height ="50px"
              src={Logo}
              className="d-inline-block align-top me-lg-5 rounded-pill mg-fluid "
            />
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav navbar-nav ps-lg-5 w-100 d-flex">
                  <li className="nav-item ms-3 ms-xl-5" >
                    <ActiveLink to ="/">Home</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5" >
                    <ActiveLink to ="/allrooms">Rooms</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5">
                    <ActiveLink to ="/timetable">Timetable</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5" >
                    <ActiveLink to ="/bookings">Bookings</ActiveLink>
                  </li>
                  <li className="nav-item ms-3 ms-xxl-5">
                    <ActiveLink to ="/maps" >Maps</ActiveLink>
                  </li>
                  <li className="nav-item ms-3  me-auto ms-xxl-5 " >
                    <ActiveLink to ="/enquiry">Enquiry</ActiveLink>
                  </li>
                  <li className="nav-item  ms-auto">
                    <ActiveLink to ="/login">Login  <i className="bi ms-1 bi-person-circle"></i></ActiveLink>
                  </li>
                </ul>
          </div>
        </nav>
      <Filter className={sticky} />
      </>

    )
  }

    const ActiveLink = ({to, children, ...props})=>{
      const truePath = useResolvedPath(to);
      const isActive = useMatch({path: truePath.pathname, end: true});
  
      return <Link className={isActive? "nav-link active" : "nav-link"} to={to} {...props}>{children} </Link> 
    }
