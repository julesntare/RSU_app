import React, { useState } from "react";
import "./Rooms.scss";

export default function Rooms ({clickedHouseData, closeRoomsTab, allowRoomsRerender}){
    const roomsObj = clickedHouseData.rooms;
    
    const closeMap = () =>{
        closeRoomsTab(false);
    }
      
    if( !roomsObj || !allowRoomsRerender) return;
       let listRooms=(
            <div className= "Rooms  container d-flex   position-absolute">
               <div className="w-100 close-map-box mt-4 pe-5">
                <i className="bi bi-x-octagon-fill me-lg-5 close-btn " onClick={()=>closeMap()}></i>
              </div>
              <div className="w-100  d-flex justify-content-center align-items-center mt-4 mb-2">
                <h1 className="h3 text-bold " >{clickedHouseData.name}</h1>
              </div>
              <div className="row g-3 mt-2" id="rooms-box">
                    {
                        roomsObj && roomsObj.map((room, i)=>{
                            return (
                                    <div className="card text-sm col-12 col-md-4 col-lg-3 col-xxl-3 shadow-sm room-card" key={i} id={i}>
                                        {i%2===0?<div className="W-100 line line-danger bg-danger mt-0 mb-2 h-1 "></div>: <div className="W-100 line line-success mt-0 mb-2 h-1 "></div>}
                                              <div className="card-body" id="card-body">
                                                  {room.name &&
                                                      <h3 className="room-name my-1 h4 d-flex justify-content-center align-items-center w-100 card-title">{room.name}</h3>}
                                                  {room.location &&
                                                      <p className="card-text room-location m-0  w-100">
                                                          <p className="d-flex flex-column justify-content-center align-items-start">
                                                            <span className="fw-bold">Location:</span>
                                                          <small className="text-sm">{room.location}</small>
                                                           </p> 
                                                      </p>
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
                                                            {i%2===0?<button className="text-danger danger-btn fw-bold btn  btn-sm btn-light">Occupied <i className="bi bi-exclamation-circle"></i></button>: 
                                                            <a href="#" className="nav-link d-flex flex-column w-100">
                                                            <button className="text-success free-btn btn fw-bold mb-2 btn-sm">Free</button>
                                                            <button className="text-Success booking-btn fw-bold btn  btn-sm text-success">Book a Room</button>
                                                          </a>
                                                          } 
                                                          </div>
                                                      </div>
                                                      }
                                            </div>
                                        </div>
                        ) })
                   }   
              </div>
                  
            </div>
        );
  
 return listRooms;
}
