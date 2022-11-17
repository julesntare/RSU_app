import React, { useState } from "react";
import "./Rooms.scss"

export default function Rooms ({clickedHouseData}){
    const RoomsOn= "Rooms container position-absolute";
    const roomsObj = clickedHouseData.rooms
    const RoomsOff= "d-none";
    let listRooms;
    const ListRooms = () =>{
    if(roomsObj) {
        return(
            roomsObj.map((item, i)=>{
                return (
                    <div className= "Rooms container position-absolute" key={i} id={i}>
                    <div className="row room row-cols-1 m-1 row-cols-md-3 g-4" >
                        <div className="col">
                            <div className="card d-flex">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h3 className="card-title">{item.name}</h3>
                                <div className="label-box d-flex p-2 my-1">
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
                </div>
                )
            })
        )
        
    }
    
}
    
    return <ListRooms />

}
