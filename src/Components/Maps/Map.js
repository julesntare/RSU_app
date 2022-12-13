import React, { useState } from "react";
import "./BuildingGoogleMap.scss";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import BuildingsList from "../../assets/APIs/BuildingsList.json";
import markerIcon from "../../assets/img/geo-fill.svg";

export default function Map() {
  const [active, setActive] = useState("");
  const [getlatlong, setGetlatlong] = useState({
    lat: -1.962621,
    long: 30.064461
  });
  const handleBuildingClick = (building, id) => {
    setActive(id);
    setGetlatlong({
      lat: building.location.lat,
      long: building.location.long,
    });
  };
  const buildings = BuildingsList.map((building, i) => (
    <li
      key={i}
      className={active === i ? "active list-group-item" : " list-group-item"}
      onClick={() => handleBuildingClick(building, i)}
    >
      {building.name}
    </li>
  ));
  //load map
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  //when not loaded!
  if (!isLoaded) {
    return (
      <div className="text-warning bg-white h1 h-100 w-100 position-absolute t-0 b-0 start-0 end-0 text-center fw-bold pt-5">
        {" "}
        Loading ...
      </div>
    );
  }

  return (
    <div className=" container-fluid map  mt-4 mb-5">
      <h3 className="h2 my-4 text-dark titles-buildings fw-bold w-100 text-center">
        {" "}
        CST Map
      </h3>
      <div className="row ">
        <div className="col-2 col-md-3 bg-light buildings-box">
          <p className="fw-bold my-3">All CST Buildings</p>
          <ul className="list-group w-100 m-0 p-0 box">{buildings}</ul>
        </div>
        <div className="col-10 col-md-9 map-box">
          <GoogleMap
            center={{ lat: getlatlong.lat, lng: getlatlong.long }}
            zoom={17}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: true,
              fullscreenControl: true,
            }}
          >
            {/* loop through map markers */}
            {BuildingsList.map((building, i) => (
              <Marker
                key={i}
                position={{
                  lat: building.location.lat,
                  lng: building.location.long,
                }}
                icon={{
                  url: markerIcon,
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                title={building.name}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
