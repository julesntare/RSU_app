import React, { useMemo, useState }  from "react";
import "./BuildingGoogleMap.scss";
// import   BuildingsList from "../../assets/APIs/BuildingsList.json";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export default  function BuildingGoogleMap ({lat, long}) {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });
  
  !isLoaded?<div className="text-warning text-center lead">Loading...</div>: <Map /> ;
  
  function Map() {
    const center = useMemo(() => ({ lat: lat, lng: long }), []);
    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
          <Marker
           position={{ lat: lat, lng: long }}
           />
        </GoogleMap>
      );
}
console.log(lat, long)
// return <Map />// don't want it ro render, jusr wait
}

   