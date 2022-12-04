import React, {useEffect, useRef, useState} from "react";
import "./Filter.scss";
import BuildingsList from "../../assets/APIs/BuildingsList.json"


export default function Filter(){
    const [searchRoom, setSearchRoom] =  useState("");
    const roomNameRef = useRef();
    const roomCapacityRef = useRef();
    const dateRef = useRef();
    const hoursRangeRef = useRef();

 
  window.onscroll = ()=> myFunction();
  const [sticky, setSticky] = useState("navbar container filter  d-flex  p-1 mt-5 w-100")

function myFunction() {
  if (window.pageYOffset >= 90) {
    setSticky(" navbar filter  d-flex  p-2 sticky ");
  } else {
    setSticky("navbar filter mt-5  d-flex w-100 p-2 mt-3");

  }
}
const handleSubmit = (data) =>{
    data.preventDefault();
    console.log(data);
  }
  const roomNames = BuildingsList.map((building)=>building.rooms.map((room, i )=>(<option  key={i}>{room.name}</option>)))

     return(
        <nav className={sticky}>
            <h3 className="lead bg-none fw-bold text-start  m-0 filter-text">Filters</h3>
            <form className="d-flex align-items-center form " role="filter" onSubmit={handleSubmit}>
              <div className=" d-flex input-box  px-1 me-2 h-100 justify-content-start w-100 align-items-center">
                <label className="d-flex flex-column me-lg-2" htmlFor="roomName" defaultValue={"Room name"}>
                    <small >Room name</small>
                  <select   id="roomName" ref={roomNameRef}  className="form-select box-filter text-dark form-select-sm p-1 me-2"  aria-label=".form-select-lg example">
                      { roomNames }
                  </select>
                </label>
                <label className="d-flex flex-column me-lg-2" htmlFor="roomCapacity" defaultValue={"Room capacity"}>
                  <small className="w-100 text-start ps-2 fw-bold">Room capacity</small>
                  <select  id="roomCapacity"  ref={roomCapacityRef} className="form-select box-filter form-select-sm p-1 me-2" aria-label=".form-select-sm example">
                    <option>&lt;300</option>
                    <option>&lt;200</option> 
                    <option>&lt;100</option>
                    <option>&lt;50</option>
                  </select>
                </label>
                <label className="d-flex flex-column me-lg-2" htmlFor="date">
                  <small className="w-100 text-start ps-2 fw-bold">Date</small>
                  <input id="date" 
                    ref={dateRef}
                    className="form-control form-select-sm p-1 box-filter me-2"
                    type="date"  aria-label="time" 
                    />
                </label >
                <label className="d-flex flex-column me-lg-2" htmlFor="hoursRange">
                  <small className="w-100 text-start ps-2 fw-bold">Hour range</small>
                  <select  ref={hoursRangeRef} id="hoursRange" className="form-select form-select-sm bg-white p-1 box-filter me-2" aria-label=".form-select-sm example">
                    <option >08:00 - 11:00</option>
                    <option >11:00 - 02:00</option>
                    <option >02:00 - 05:00</option>
                  </select>
                </label>
              </div>
              {/* <button className="btn-p d-flex justify-content-center px-3 py-1 align-items-center " type="submit"><i className="bi text-primary bi-search"></i></button> */}
            </form>
      </nav>   
     )
}