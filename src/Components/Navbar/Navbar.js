import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo/urLogo.png";


const NavigationBar = () =>{
  const time = new Date();
  const placeholderTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;
  const [selectRoom, setSelectRoom] =  useState("");
  const [selectDate, setSelectDate] =  useState("");
  const [selectHour, setSelectHour] =  useState("");
  const [selectCapacity, setSelectCapacity] =  useState("");

//on input/select change
  // const handleChange = (e) =>{
  // }
  // console.log(selectValue);
  //submit data
  const handleSubmit = (data) =>{
    console.log(data);
  }
    return (
      <>
            {/* big navbar menu */}
        <nav className="navbar container navbar-expand-lg nav-web text-white px-3  d-flex mt-0 mb-1">
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
              <div className="navbar-nav  w-100 me-auto d-flex ">
                  <a className="nav-link active ms-lg-5" aria-current="page" href="#">Home</a>
                  <a className="nav-link ms-lg-5" href="#">Rooms</a>
                  <a className="nav-link ms-lg-5" href="#">Timetable</a>
                  <a className="nav-link ms-lg-5 " href="#">Bookings</a>
                  <a className="nav-link ms-lg-5" href="#">Maps</a>
                  <a className="nav-link ms-lg-5" href="#">Enquiry</a>
                  <a href="#" className="account-user nav-link me-lg-5">Login <i className="bi ms-3 bi-person-circle"></i></a>
              </div>
          </div>
        </nav>
        {/* Filters down */}
        <nav className="navbar container filter  p-2 m mt-3 sticky-filter bg-none">
            <h3 className="lead bg-none fw-bold  text-start  m-0 filter-text">Filters</h3>
            <form className="d-flex w-100 align-items-center form m-0 " role="filter" onSubmit={handleSubmit}>
              <div className=" d-flex input-box me-2 h-100 justify-content-between align-items-center">
                <select   id="1" onChange={e=>{setSelectRoom(); console.log(e.target.value)}}   className="form-select box-filter form-select-sm  me-2"  aria-label=".form-select-lg example">
                  <option selected disabled className="select-placeholder">Room name</option>
                  <option value={selectRoom}>Audi 1</option>
                  <option value={selectRoom}>Muhazi room 2</option>
                  <option value={selectRoom}>Karisimbi lab</option>
                </select>
                <select  id="2"  onChange={e=>{setSelectCapacity(); console.log(e.target.value)}} className="form-select box-filter form-select-sm me-2" aria-label=".form-select-sm example">
                  <option selected disabled className="select-placeholder">Room Capacity</option>
                  <option value={selectCapacity}>&lt;300</option>
                  <option value={selectCapacity}>&lt;200</option>
                  <option value={selectCapacity}>&lt;100</option>
                  <option value={selectCapacity}>&lt;50</option>
                </select>
                <input id="3" 
                   onChange={e=>{setSelectDate(e.target.value); console.log(selectDate)}}  
                   className="form-control form-select-sm box-filter me-2"
                   value ={selectDate} 
                   type="date"  aria-label="time" 
                   />
                <select  onChange={e=>{setSelectHour(); console.log(e.target)}}  id="4" className="form-select form-select-sm box-filter me-2" aria-label=".form-select-sm example">
                  <option value={selectHour}>08:00 - 11:00</option>
                  <option value={selectHour}>11:00 - 02:00</option>
                  <option value={selectHour}>02:00 - 05:00</option>
                </select>
              </div>
              <button className="btn-p  w-10" type="submit">Filter</button>
            </form>
      </nav>     
      </>
    );

}
export default NavigationBar;
