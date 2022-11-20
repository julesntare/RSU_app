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
                <i className="bi bi-x-octagon-fill me-5 close-btn " onClick={()=>closeMap()}></i>
              </div>
              <div className="w-100  d-flex justify-content-center align-items-center mt-4 mb-2">
                <h1 className="h3 text-bold " >{clickedHouseData.name}</h1>
              </div>
              <div className="row g-3 mt-2" id="rooms-box">
                    {
                        roomsObj && roomsObj.map((item, i)=>{
                            return (
                            <div className="card col-12 col-md-6 col-lg-4 col-xxl-3 shadow-sm room" key={i} id={i}>
                                <div className="W-100 line mt-0 mb-2 h-1 "  id={i}></div>
                                <div className="card-body d-flex" id="card-body">
                                    {item.name &&
                                        <h3 className="room-name my-1 h4 d-flex justify-content-center align-items-center w-100 card-title">{item.name}</h3>}
                                    {item.location &&
                                        <p className="card-text room-location mt-1 d-flex w-100">
                                            <span className="fw-bold my-1">Location: </span> 
                                                {item.location}
                                        </p>
                                        } 
                                    
                                    {item.seats && item.use &&
                                        <div className="label-box w-100 d-flex  flex-column">
                                            <div className="details-box w-100 d-flex w-100 p-1 flex-column">
                                                <p className="room-seats my-1">
                                                    <span className="fw-bold">Seats: </span> 
                                                    {item.seats}
                                                </p>
                                                <p className="room-use">
                                                    <span className="fw-bold">Use: </span> 
                                                    {item.use}
                                                </p>
                                            </div>
                                            <hr className="my-1"></hr>
                                            <div className="status-btns p-1 d-flex mt-1 justify-content-between">
                                                <a href="#">
                                                    <button className="text-success fw-bold btn btn-light">Free</button>
                                                </a>
                                                <a href="#">
                                                    <button className="text-danger fw-bold btn btn-light">Occupied</button>
                                                </a>
                                            </div>
                                        </div>
                                        }
                                    </div>
                            </div>
                        ) })
                   }   
              </div>
                  
            </div>
        )


   
 return listRooms;
}
