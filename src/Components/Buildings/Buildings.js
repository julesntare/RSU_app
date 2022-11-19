import React, { useMemo, useState }  from "react";
import "./Buildings.scss";
import   BuildingsList from "../../assets/APIs/BuildingsList.json";
import BuildingGoogleMap from "../Maps/BuildingGoogleMap";


export default function Buildings ({setGetClickedBuilding, allowRoomsRerender}){
    //adding our buildings to google map:
    const [locationMarker, setLocationMarker] = useState(false);

    const  [latLong, setLatLong] = useState({})

    const showBuildingLocation = (item, e)=>{
        // console.log(`CLICKED LOCATION OF ID ${e} , OF BUILDING ${item.id} `);
        setLocationMarker(true);
        setLatLong({
            lat: item.location.lat,
            long: item.location.long,
            id: e
            
        })
    }

    const handleBuildingClick = (e) =>{
        // console.log("clicked Link", e.id)
        setGetClickedBuilding(e)
        allowRoomsRerender(true);
        //after getting the clicke link id, let use it to display its data

    }

    return(
        <div className="mt-3 container" id="building-container">
            <h3 className="h3 my-3 text-dark titles-buildings fw-bold w-100 text-center"> Buildings</h3>
           {
            BuildingsList.map((item, i)=>{
                return(
                    <div className="d-flex  my-2" key={item.id}>
                        <ul className="list-group w-100">
                            <li className="list-group-item w-100 d-flex justify-content-between building-list align-items-center my-1"  
                                id={item.id} 
                                onClick={()=>handleBuildingClick(item)}
                            >
                            <span> {item.name }{ item.other_names?  <span className="ms-1 text-sm ">( {item.other_names} )</span>: ""}</span>
                            <span className="badge  rounded-pill bg-primary building-rooms text-light p-2 d-flex  justify-content-center align-items-center me-2"
                                    >
                                    {item.rooms.length} Rooms
                            </span>
                            <span className="badge see-rooms  rounded-pill p-2 d-flex  justify-content-center align-items-center me-2"
                                    >
                                    <i className="bi text-primary fw-bold  fs-4 bi-eye me-2"></i>See Rooms
                            </span>
                                
                            
                            </li>
                        </ul>
                         <span className="badge ms-auto d-flex justify-content-center align-items-center rounded-pill building-location text-dark">
                                <button className="location-link  btn p-2 d-flex" 
                                id={i}
                                onClick={(e)=> e.target.id?showBuildingLocation(item, e.target.id) : null}
                                >
                                    <i className="bi bi-geo-alt mx-1 text-primary"> </i>Location
                                </button>
                            </span>
                    </div>  
                )
            })
           }
           {locationMarker &&
           <BuildingGoogleMap
                lat = {latLong.lat}
                long = {latLong.long}
                id = {latLong.id}
            />
            }
        </div>
    )
}
