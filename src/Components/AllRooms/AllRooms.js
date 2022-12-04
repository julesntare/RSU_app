import React, { useState } from "react";
import "./AllRooms.scss"
import   BuildingsList from "../../assets/APIs/BuildingsList.json";
import {Link} from "react-router-dom";

const AllRooms = ({setGetClickedRoomForBooking}) => {
  const hideNav = (room) =>{
    setGetClickedRoomForBooking(room); //now we can get a room chosen for booking
}

    const  rooms = BuildingsList.map((building)=>building.rooms.map((room, i )=>(
    <div className="card text-sm col-12 col-sm-4 col-lg-3 col-xxl-3 shadow-sm room-card" key={i} id={i}>
        {i%2===0?<div className="W-100 line line-danger bg-danger mt-0 mb-2 h-1 "></div>: <div className="W-100 line line-success mt-0 mb-2 h-1 "></div>}
              <div className="card-body" id="card-body">
                  {room.name &&
                      <h3 className="room-name my-1 h4 d-flex justify-content-center align-items-center w-100 card-title">{room.name}</h3>}
                  {room.location &&
                      <div className="card-text room-location m-0  w-100">
                          <p className="d-flex flex-column justify-content-center align-items-start">
                            <span className="fw-bold">Location:</span>
                          <small className="text-sm">{room.location}</small>
                           </p> 
                      </div>
                      } 
                  {room.seats && room.use &&
                      <div className="label-box w-100 d-flex  flex-column">
                          <div className="details-box w-100 d-flex w-100 flex-column">
                              <p className="room-seats">
                                  <span className="fw-bold">Seats: </span> 
                                  {room.seats}
                              </p>
                              <p className="room-use">
                                  <span className="fw-bold">Use: </span> 
                                  <small className="fs-sm">{room.use}</small>
                              </p>
                          </div>
                          <div className="status-btns d-flex justify-content-center aligh-items-center p-2">
                            {i%2===0?<button className="text-danger danger-btn fw-bold btn w-100 btn-sm btn-light">Occupied <i className="bi bi-exclamation-circle"></i></button>: 
                            <div to="/bookingform" className="nav-link d-flex flex-column w-100">
                              <button className="text-success free-btn btn fw-bold mb-2 btn-sm">Free</button>
                              <Link to="/bookingform" className="text-Success w-100 booking-btn fw-bold btn btn-sm text-success" onClick={(e)=>e.target? hideNav(room) : null}>Request a Room</Link>
                            </div>
                          } 
                          </div>
                      </div>
                      }
                  </div>
                </div>
     )
     ));


  return (
      <div className='container-fluid h-100 w-100'>
        <h1 className="mb-3 text-center py-2 text-primary fw-bold">All rooms</h1>
        <div className="d-flex row h-100" id="rooms-box">
          {rooms}
        </div>
      </div>
  )
}
export default AllRooms
