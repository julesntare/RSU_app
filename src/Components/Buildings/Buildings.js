import React, { useMemo, useState }  from "react";
import "./Buildings.scss";
import   BuildingsList from "../../assets/APIs/BuildingsList.json";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import BuildingGoogleMap from "../Maps/BuildingGoogleMap";


export default function Buildings (){
    //adding our buildings to google map:
    const [locationMarker, setLocationMarker] = useState(false);
    let latLong ={}
    const showBuildingLocation = (e)=>{
        setLocationMarker(true);
        latLong = {
            lat: e.location.lat,
            long: e.location.long
        }
        console.log(`Lat: ${latLong.lat}, long:  ${lat.long} `);
    }

    const handleBuildingClick = (e) =>{
        console.log("cliked", e.id)
        //after getting the clicke link id, let use it to display its data

    }

    return(
        <div className="mt-3 container">
            <h3 className="h3 my-3"> Buildings</h3>
           {
            BuildingsList.map((item, i)=>{
                return(
                    <ul className="list-group" key={item.id}>
                        <li className="list-group-item d-flex justify-content-between building-list align-items-center my-1"   
                            onClick={()=>handleBuildingClick(item)}
                        >
                            {item.name}
                            <span className="badge mx-2 rounded-pill building-location text-dark"><button className="location-link p-2 d-flex" onClick={()=>showBuildingLocation(item)}><i className="bi bi-geo-alt mx-1 text-primary"> </i>Location</button></span>
                            <span className="badge  rounded-pill bg-primary building-rooms text-light p-2 d-flex  justify-content-center align-items-center me-2"
                            >
                                 {item.numberOfRooms} Rooms
                            </span>
                        </li>
                    </ul>  
                )
            })
           }
           {locationMarker &&
           <BuildingGoogleMap
                lat = {latLong.lat}
                long = {latLong.long}
            />
            }
        </div>
    )
}