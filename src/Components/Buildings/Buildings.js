import React, { useMemo }  from "react";
import "./Buildings.scss";
import   BuildingsList from "../../assets/APIs/BuildingsList.json";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export default function Buildings (){
    //adding our buildings to google map:
    const showBuildingLocation = (e)=>{
        console.log(`${e.name} of ${e.id} is clicked`);

    //     const {isLoaded} = useLoadScript({
    //         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    //     });
    //       if (!isLoaded) return <div className="text-success lead">Loading...</div>;
    //       return <Map />;
    //     }
        
    //     function Map() {
    //       const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    //       return (
    //         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    //           <Marker position={center} />
    //         </GoogleMap>
    //       );
    //     }
    }

    const handleBuildingClick = (e) =>{
        console.log("cliked", e.id)
        //after getting the clicke link id, let use it to display its data

    }

    return(
        <div className="mt-3 container-fluid">
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
                            <span className="badge  rounded-pill bg-primary building-rooms">
                                <span className="text-light"> Number of Rooms: {item.numberOfRooms}</span>
                            </span>
                        </li>
                    </ul>  
                )
            })
           }
        </div>
    )
}