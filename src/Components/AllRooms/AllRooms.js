import React, { useEffect, useState } from "react";
import { slice } from "lodash";
import "./AllRooms.scss";
import BuildingsList from "../../assets/APIs/BuildingsList.json";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";

const AllRooms = ({ setGetClickedRoomForBooking }) => {
  const [currRooms, setCurrRooms] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(5);
  const initialRooms = slice(currRooms, 0, index);

  const getData = () => {
    BuildingsList.map((building) =>
      building.rooms.map((room) =>
        setCurrRooms((currRooms) => [...currRooms, room])
      )
    );
  };

  const loadMore = () => {
    setIndex(index + 5);
    console.log(index);
    if (index >= currRooms.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const hideNav = (room) => {
    setGetClickedRoomForBooking(room); //now we can get a room chosen for booking
  };
  let second = 0;
  let arrayTime = ["08:00-11:00"];

  // update timeline every second in useEffect
  useEffect(() => {
    return () => {
      setInterval(() => {
        // update realtime hour:minute every second starting from startTime
        let realTime2 = new Date();
        var hours = realTime2.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + realTime2.getMinutes();

        // Will display time in 08:00 format
        var formattedTime = hours + ":" + minutes.substr(-2);
        // update status every 30 seconds
        if (second % 1800 === 0) {
          document.querySelector(".swiper-wrapper").innerHTML += `	
        <div class="swiper-slide">
        <div class="timestamp">
          <span class="date">${formattedTime}</span>
        </div>
        <div class="status">
          <span></span>
        </div>
      </div>`;
        }
        second++;
      }, 1000);
    };
  }, [second]);

  const rooms = initialRooms.map((room, i) => (
    <div
      className="card text-sm col-12 col-sm-4 col-lg-3 col-xxl-3 shadow-sm room-card"
      key={i}
      id={i}
    >
      <div className="card-body" id="card-body">
        <div class="time-line-box">
          <div class="swiper-container text-center">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="timestamp">
                  <span class="date">08:00</span>
                </div>
                <div class="status">
                  <span>Work</span>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        {room.name && (
          <h3 className="room-name my-1 h4 d-flex justify-content-center align-items-center w-100 card-title">
            {room.name}
          </h3>
        )}
        {room.location && (
          <div className="card-text room-location m-0  w-100">
            <p className="d-flex flex-column justify-content-center align-items-start">
              <span className="fw-bold">Location:</span>
              <small className="text-sm">{room.location}</small>
            </p>
          </div>
        )}
        {room.seats && room.use && (
          <div className="label-box w-100 d-flex  flex-column">
            <div className="details-box w-100 d-flex w-100 flex-column">
              <div className="d-flex justify-content-between">
                <p className="room-seats">
                  <span className="fw-bold">Seats: </span>
                  {room.seats}
                </p>
                <p>
                  {i % 2 === 0 ? (
                    <button className="text-danger danger-btn fw-bold btn w-100 btn-sm btn-light">
                      <i className="bi bi-exclamation-circle"></i> Occupied
                    </button>
                  ) : (
                    <button className="text-success danger-btn fw-bold btn w-100 btn-sm btn-light">
                      <i className="bi bi-info-circle"></i> Free
                    </button>
                  )}
                </p>
              </div>
              <p className="room-use">
                <span className="fw-bold">Use: </span>
                <small className="fs-sm">{room.use}</small>
              </p>
            </div>
            <div className="status-btns d-flex justify-content-center aligh-items-center p-2">
              <div
                to="/bookingform"
                className="nav-link d-flex flex-column w-100"
              >
                <Link
                  to="/bookingform"
                  className="text-info w-100 booking-btn fw-bold btn btn-sm text-info"
                  onClick={(e) => (e.target ? hideNav(room) : null)}
                >
                  Request a Room
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ));

  return (
    <div className="container-fluid h-100 w-100">
      <h3 className="h2 my-4 text-dark titles-buildings fw-bold w-100 text-center">
        {" "}
        All rooms
      </h3>
      <hr />
      <Filter />
      <div className="d-flex row h-100" id="rooms-box">
        {rooms}
        <div className="d-flex justify-content-center mt-3 mb-5">
          {!isCompleted && (
            <button onClick={loadMore} type="button" className="btn btn-primary">
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default AllRooms;
