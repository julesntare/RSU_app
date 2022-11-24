import React  from "react";
import "./BuildingGoogleMap.scss";
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

export default  function BuildingGoogleMap ({latLong,showMaps}) {
  //coordinates
  const lat = latLong.lat;
  const long = latLong.long;
  console.log(long, lat,  "aos")
 //close our map
  const closeMap = () =>{
    showMaps(false);
}
//load map
  function Map() {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    //when not loaded!
    if (!isLoaded) {
      return <div className="text-primary h1 text-center fw-bold pt-5"> Loading ...</div>
    }
  
    return (
      <div className=" map-container ">
          <div className="w-100 close-map-box w-100">
                  <i className="bi bi-x-octagon-fill me-3 close-btn " onClick={()=>closeMap()}></i>
          </div>
          <div className="w-100 h-100">
          <GoogleMap
          center={{   lat: lat,
            lng: long}}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        >
          <Marker position={{   lat: lat,
                lng: long}} />
        </GoogleMap>
          </div>
      </div>
      );
}
return <Map />
}