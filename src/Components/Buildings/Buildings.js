import React, { useMemo, useState }  from "react";
import "./Buildings.scss";
import   BuildingsList from "../../assets/APIs/BuildingsList.json";
import BuildingGoogleMap from "../Maps/BuildingGoogleMap";


export default function Buildings ({setGetClickedBuilding, allowRoomsRerender}){
    //adding our buildings to google map:
    const [locationMarker, setLocationMarker] = useState(false);

    const  [latLong, setLatLong] = useState({})

    const showBuildingLocation = (item)=>{
        setLocationMarker(true);
        setLatLong({
            lat: item.location.lat,
            long: item.location.long,  
        })
    }
    // console.log(latLong, "aisooo");

    const handleBuildingClick = (e) =>{
        // console.log("clicked Link", e.id)
        setGetClickedBuilding(e)
        allowRoomsRerender(true);
        //after getting the click link id, let use it to display its data

    }

    return(
        <div className="mt-3 container" id="building-container">
            <h3 className="h2 my-4 text-dark titles-buildings fw-bold w-100 text-center"> Buildings</h3>
            <div   className="my-2 d-flex w-100  pt-3 row mt-2">
                {
                    BuildingsList.map((item, i)=>{
                        return(
                            <div className=" bg-transparent m-1 col-12 me-md-3 mb-3 col-md-5" key={item.id}>
                                <div className="d-flex  p-2 building-list  my-1"  
                                    id={item.id} 
                                >
                                    <h3 className="text-center  my-2"> {item.name }{ item.other_names?  <span className="ms-1 text-sm ">( {item.other_names} )</span>: ""}</h3>
                                    <div className="d-flex align-items-center py-3 btn-box justify-content-between">
                                            <span className=" rounded-pill  btn number-rooms text-light p-2 d-flex  justify-content-center align-items-center me-2"
                                                    >
                                                    {item.rooms.length} Rooms
                                            </span>
                                            <span className="badge see-rooms btn rounded-pill p-2 d-flex  justify-content-center align-items-center me-2"
                                                onClick={()=>handleBuildingClick(item)}
                                            >
                                                    <i className="bi text-primary fw-bold  fs-4 bi-eye me-2"></i>See Rooms
                                            </span>
                                            <span 
                                             className=" my-2 d-flex justify-content-center align-items-center rounded-pill building-location text-dark"
                                             >
                                                <button className="location-link  btn p-2 d-flex"
                                                 id={i}
                                                 onClick={(e)=> e.target.id?showBuildingLocation(item) : null}
                                                >
                                                    <i className="bi bi-geo-alt mx-1 text-primary"> </i>Location
                                                </button>
                                            </span>
                                    </div>
                                    
                                </div>
                            </div>  
                        )
                    })
                }
           </div>
           {locationMarker &&
            <BuildingGoogleMap
                    latLong = {latLong}
                    showMaps = {setLocationMarker}
                />
            }
        </div>
    )
}
