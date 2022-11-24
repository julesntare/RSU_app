import React, { useMemo, useState, useRef, useEffect }  from "react";
import "./BuildingGoogleMap.scss";
import { GoogleMapsProvider, useGoogleMap } from "@ubilabs/google-maps-react-hooks";

export default  function BuildingGoogleMap ({latLong,showMaps}) {
  //coordinates
  const lat = latLong.lat;
  const long = latLong.long;
  console.log(long, lat,  "aos")
   const API_KEY = "AIzaSyD5HkXo_Q5UugZzWZjKJRxprUn2yPni1VE"

  const closeMap = () =>{
    showMaps(false);
}
// const center = useMemo(() => ({ lat: lat, lng: long }), []);
// console.log(center, "aiyoo center");
const mapOptions = {
  zoom: 10,
  center:  useMemo(() => ({ lat: lat, lng: long }), [])
}
  function Map() {
    // const center = useMemo(() => ({ lat: lat, lng: long }), []);
    const [mapContainer, setMapContainer] = useState(null);
  console.log(mapOptions.center);
    return (
      <div className=" map-container ">
          <div className="w-100 close-map-box w-100">
                  <i className="bi bi-x-octagon-fill me-3 close-btn " onClick={()=>closeMap()}></i>
          </div>
          <GoogleMapsProvider
            googleMapsAPIKey={API_KEY}
            options = {mapOptions}
            mapContainer = {mapContainer}
          >
            <div ref={node => setMapContainer(node)} className = "w-100 h-100" />
        </GoogleMapsProvider>
      </div>
      );
}
return <Map />
}