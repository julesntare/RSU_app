import React  from "react";
import "./BuildingGoogleMap.scss";
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

export default  function Map () {
  //coordinates
  const lat = -1.9568693;
  const long = 30.0635843;

//load map
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    //when not loaded!
    if (!isLoaded) {
      return <div className="text-warning bg-white h1 h-100 w-100 position-absolute t-0 b-0 start-0 end-0 text-center fw-bold pt-5"> Loading ...</div>
    }
  
    return (
      <div className=" container map mt-4 mb-5">
        <h4 className="h4 text-primary fw-bold p-4 pb-2 text-center"> CST Map</h4>
          <div className="w-100 map-box">
          <GoogleMap
          center={{   lat: lat,
            lng: long}}
          zoom={20}
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
