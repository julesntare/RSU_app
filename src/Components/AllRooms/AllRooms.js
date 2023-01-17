import React, { useEffect, useState } from "react";
import { slice } from "lodash";
import "./AllRooms.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getRoom, getRoomsByBuildingID } from "../../redux/actions/RoomActions";
import { CircularProgress } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const AllRooms = (props) => {
  const [currRooms, setCurrRooms] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(5);
  const rooms = useSelector((state) => state.rooms);
  const slicedRooms = slice(currRooms, 0, index);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hasParam } = props;
  const param = useParams();
  const {isAuthenticated} = useAuth();

  const getData = () => {
    rooms.map((room) => setCurrRooms((currRooms) => [...currRooms, room]));
    // sort with buiding name
    // setCurrRooms(
    //   currRooms.sort((a, b) => {
    //     if (a.building.building_name < b.building.building_name) {
    //       return -1;
    //     }
    //     if (a.building.building_name > b.building.building_name) {
    //       return 1;
    //     }
    //     return 0;
    //   })
    // );
  };

  const loadMore = () => {
    setIndex(index + 5);
    if (index >= currRooms.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    dispatch(hasParam ? getRoomsByBuildingID(param.id) : getRoom());
  }, [dispatch]);

  // let second = 0;

  // navigate to rooms when requestRooms clicked
  const navigateToBooking = (e, i) => {
    e.preventDefault();
    // check if user is logged in an validate token
    if (!isAuthenticated) {
      localStorage.setItem("rsu_redirect", `/bookingform/${i}`);
      navigate("/login");
      return;
    }
    navigate(`/bookingform/${i}`);
  };

  // update timeline every second in useEffect
  // useEffect(() => {
  //   return () => {
  //     setInterval(() => {
  //       // update realtime hour:minute every second starting from startTime
  //       let realTime2 = new Date();
  //       var hours = realTime2.getHours();
  //       // Minutes part from the timestamp
  //       var minutes = "0" + realTime2.getMinutes();

  //       // Will display time in 08:00 format
  //       var formattedTime = hours + ":" + minutes.substr(-2);
  //       // update status every 30 seconds
  //       if (second % 30 === 0) {
  //         document.querySelector(".swiper-wrapper").innerHTML += `
  //       <div className="swiper-slide">
  //       <div className="timestamp">
  //         <span className="date">${formattedTime}</span>
  //       </div>
  //       <div className="status">
  //         <span></span>
  //       </div>
  //     </div>`;
  //       }
  //       second++;
  //     }, 30000);
  //   };
  // }, [second]);

  const roomsRender = slicedRooms.map((room, i) => (
    <div
      className="card text-sm col-12 col-sm-4 col-lg-3 col-xxl-3 shadow-sm room-card"
      key={i}
      id={i}
    >
      <div className="card-body" id="card-body">
        <div className="time-line-box">
          <div className="swiper-container text-center">
            <div className="swiper-wrapper">
              <div className="swiper-slide"></div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <h3 className="room-name my-1 h4 d-flex justify-content-center align-items-center w-100 card-title">
          {room.room_name}
        </h3>
        {room.room_description && (
          <div className="card-text room-location m-0  w-100">
            <p className="d-flex flex-column justify-content-center align-items-start">
              <small className="text-sm">{room.room_description}</small>
            </p>
          </div>
        )}
        {room.capacity && (
          <div className="label-box w-100 d-flex  flex-column">
            <div className="details-box w-100 d-flex w-100 flex-column">
              <div className="d-flex justify-content-between">
                <p className="room-seats">
                  <span className="fw-bold">Capacity: </span>
                  {room.capacity}
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
                <span className="fw-bold">Room Floor: </span>
                <small className="fs-sm">{room.room_floor}</small>
              </p>
            </div>
            <div className="status-btns d-flex justify-content-center aligh-items-center p-2">
              <div
                to="/bookingform"
                className="nav-link d-flex flex-column w-100"
              >
                <Link
                  onClickCapture={(e) => navigateToBooking(e, room._id)}
                  className="text-info w-100 booking-btn fw-bold btn btn-sm text-info"
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
        {roomsRender}
        <div className="d-flex justify-content-center mt-3 mb-5">
          {slicedRooms.length > 0 && !isCompleted && (
            <button
              onClick={loadMore}
              type="button"
              className="btn btn-primary"
            >
              Load More
            </button>
          )}
          {
            // add react data loading
            slicedRooms.length < 1 && <CircularProgress />
          }
        </div>
      </div>
    </div>
  );
};
export default AllRooms;
