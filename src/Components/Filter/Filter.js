import React, {useEffect, useState} from "react";
import "./Filter.scss";


export default function Filter({className}){
    const [selectRoom, setSelectRoom] =  useState("");
    const [selectDate, setSelectDate] =  useState("");
    const [selectHour, setSelectHour] =  useState("");
    const [selectCapacity, setSelectCapacity] =  useState("");
    const time = new Date();
  const placeholderTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;
    
//on input/select change
  // const handleChange = (e) =>{
  // }
  // console.log(selectValue);
  //submit data
  
    const handleSubmit = (data) =>{
        data.preventDefault();
        console.log(data);
      }
     return(
        <nav className={className}>
            <h3 className="lead bg-none fw-bold text-start  m-0 filter-text">Filters</h3>
            <form className="d-flex align-items-center form " role="filter" onSubmit={handleSubmit}>
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
              <button className="btn-p d-flex justify-content-center align-items-center " type="submit"><i className="bi text-primary bi-search"></i></button>
            </form>
      </nav>   
     )
}