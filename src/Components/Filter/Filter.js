import React, {useEffect, useState} from "react";
import "./Filter.scss";
import BuildingsList from "../../assets/APIs/BuildingsList.json"


export default function Filter(){
    const [selectRoom, setSelectRoom] =  useState("");
    const [selectDate, setSelectDate] =  useState("");
    const [selectHour, setSelectHour] =  useState("");
    const [selectCapacity, setSelectCapacity] =  useState("");
    const time = new Date();
  const placeholderTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;
    
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
  const  roomNames = BuildingsList.map((building)=>building.rooms.map((room, i )=>(
                <option value={selectRoom} key={i}>{room.name}</option>
  )))
     return(
        <nav className={sticky}>
            <h3 className="lead bg-none fw-bold text-start  m-0 filter-text">Filters</h3>
            <form className="d-flex align-items-center form " role="filter" onSubmit={handleSubmit}>
              <div className=" d-flex input-box me-2 h-100 justify-content-between align-items-center">
                <select   id="1" onChange={setSelectRoom}   className="form-select box-filter text-dark form-select-sm p-1 me-2"  aria-label=".form-select-lg example">
                  <option selected disabled>Room name</option>
                    {roomNames}
                </select>
                <select  id="2"  onChange={setSelectCapacity} className="form-select box-filter form-select-sm p-1 me-2" aria-label=".form-select-sm example">
                  <option selected disabled >Room Capacity</option>
                  <option value={selectCapacity}>&lt;300</option>
                  <option value={selectCapacity}>&lt;200</option>
                  <option value={selectCapacity}>&lt;100</option>
                  <option value={selectCapacity}>&lt;50</option>
                </select>
                <input id="3" 
                   onChange={setSelectDate}  
                   className="form-control form-select-sm p-1 box-filter me-2"
                   value ={selectDate} 
                   type="date"  aria-label="time" 
                   />
                <select  onChange={setSelectHour}  id="4" className="form-select form-select-sm bg-white p-1 box-filter me-2" aria-label=".form-select-sm example">
                <option selected disabled ></option>
                  <option value={selectHour}>08:00 - 11:00</option>
                  <option value={selectHour}>11:00 - 02:00</option>
                  <option value={selectHour}>02:00 - 05:00</option>
                </select>
              </div>
              {/* <button className="btn-p d-flex justify-content-center px-3 py-1 align-items-center " type="submit"><i className="bi text-primary bi-search"></i></button> */}
            </form>
      </nav>   
     )
}