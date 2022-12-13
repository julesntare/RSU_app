import React, { useState } from "react";
import "./Buildings.scss";
import BuildingsList from "../../assets/APIs/BuildingsList.json";
import BuildingGoogleMap from "../Maps/BuildingGoogleMap";
import BuildingImg from "../../assets/img/muhabura.jpeg";

export default function Buildings({
  setGetClickedBuilding,
  allowRoomsRerender,
}) {
  const [locationMarker, setLocationMarker] = useState(false);
  const [latLong, setLatLong] = useState({});
  const showBuildingLocation = (item) => {
    setLocationMarker(true);
    setLatLong({
      lat: item.location.lat,
      long: item.location.long,
    });
  };

  const handleBuildingClick = (e) => {
    setGetClickedBuilding(e);
    allowRoomsRerender(true);
  };
  return (
    <div className="mt-5 container-fluid" id="building-container">
      <h3 className="h2 my-4 text-dark titles-buildings fw-bold w-100 text-center">
        {" "}
        Buildings
      </h3>
      <hr/>
      <div className="my-2 bg-none buildings-box pt-3 row mt-2">
        {BuildingsList.map((item, i) => {
          return (
            <div
              className="card border building-card m-1 mt-3 p-0 col-12 col-md-4 col-lg-3"
              key={item.id}
            >
              <img
                className="card-img-top m-0"
                src={BuildingImg}
                alt="Card image cap"
              ></img>
              <p className="text-center card-name-title my-2">
                {" "}
                {item.name.toUpperCase()}
                {item.other_names ? (
                  <span className="ms-1 text-sm ">( {item.other_names} )</span>
                ) : (
                  ""
                )}
              </p>
              <div className="card-body p-2">
                <div className="w-100 d-flex justify-content-evenly text-dark">
                  <span className=" d-flex  justify-content-center align-items-center me-2">
                    <i className="bi me-3 bi-buildings"></i>
                    {item.floor} Floors
                  </span>

                  <span className=" d-flex  justify-content-center align-items-center me-2">
                    <i className="bi me-3 bi-door-open"></i>
                    {item.numberOfRooms} Rooms
                  </span>
                </div>
                <div className="py-1 d-flex flex-column justify-content-center btn-box">
                  <button
                    className=" d-flex justify-content-center bg-primary text-white fw-bold btn-sm align-items-center rounded-pill "
                    onClick={() => handleBuildingClick(item)}
                  >
                    <i className="bi fw-bold  bi-eye me-3"></i>Head to Rooms
                  </button>
                  <button
                    className=" my-2  bg-primary d-flex justify-content-center  text-white fw-bold btn-sm align-items-center rounded-pill "
                    id={i}
                    onClick={() => showBuildingLocation(item)}
                  >
                    <i className="bi bi-geo-alt me-3"> </i>Navigate on Map
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {locationMarker && (
        <BuildingGoogleMap latLong={latLong} showMaps={setLocationMarker} />
      )}
    </div>
  );
}
