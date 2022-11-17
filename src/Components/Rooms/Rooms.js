import React, { useState } from "react";
import "./Rooms.scss"

export default function Rooms ({clickedHouseData}){
    const roomsObj = clickedHouseData.rooms

    if(!roomsObj) return; //if not clicked on the building link, then no rooms you can see in DOM    

    let listRooms=(
        <div className= "Rooms container d-flex position-absolute">
            {
                 roomsObj && roomsObj.map((item, i)=>{
                    console.log(item)
                    return (
                <div className="row row-cols-1 m-2 row-cols-md-3 g-4" key={i} id={i}>
                    <div className="col room w-100">
                        <div className="card w-100 h-100">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body d-flex">
                                <h3 className="room-name card-title">{item.name}</h3>
                                <div className="label-box">
                                    <div className="details-box d-flex justify-content-between">
                                            <label className="p-2 ">Seats: {item.seats} </label>
                                            <label className="p-2 ">Use: {item.use} </label>
                                    </div>
                                    <div className="status p-1 d-flex mt-1 justify-content-between">
                                        <button className="text-success btn btn-light">Free</button>
                                        <button className="text-danger btn btn-light">Occupied</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>  
                  ) })
            }
                 
        </div>
    )

 return listRooms;
}
