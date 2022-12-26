import React, { useEffect, useState } from "react";
import "./BuildingGoogleMap.scss";
import { MapContainer, Marker, TileLayer, Circle, Popup } from "react-leaflet";
import L from "leaflet";
import BuildingsList from "../../assets/APIs/BuildingsList.json";
import currentLocIcon from "../../assets/img/current-loc.png";
import buildingLocIcon from "../../assets/img/building-loc.png";

export default function Maps() {
  const [active, setActive] = useState("");
  const [center, setCenter] = useState([-1.9507, 30.0663]);
  const [haveBuildingsLocation, setHaveBuildingsLocation] = useState(false);
  const [otherLocations, setOtherLocations] = useState([]);

  const myIcon = L.icon({
    iconUrl: currentLocIcon,
    iconSize: [32, 32],
  });

  const otherIcon = L.icon({
    iconUrl: buildingLocIcon,
    iconSize: [32, 32],
  });

  // request user location enabling
  useEffect(() => {
    return () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCenter([position.coords.latitude, position.coords.longitude]);
            setHaveBuildingsLocation(true);
            return;
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        alert("Better to enable your location for best way to follow.");
        console.log("geolocation is not enabled");
      }
    };
  }, [navigator.geolocation]);

  const handleBuildingClick = (building, id) => {
    setActive(id);
    setCenter([building.location.lat, building.location.long]);
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
          <MapContainer
            style={{ width: "100%", height: "100%" }}
            center={center}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              url={require("../../assets/img/tile-map.png").default}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {haveBuildingsLocation ? (
              <Marker position={center} icon={myIcon}>
                <Popup>Current location</Popup>
              </Marker>
            ) : null}
            {otherLocations.map((location) => (
              <Marker
                position={[location.latitude, location.longitude]}
                icon={otherIcon}
              />
            ))}
            {haveBuildingsLocation ? (
              <Circle center={center} radius={200} />
            ) : null}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
