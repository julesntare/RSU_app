import React, { useState, useEffect } from "react";
import "./bookings.scss";

const Bookings = ({ receiveDateForbooking }) => {
  const [getdataFromLS, SetGetdataFromLS] = useState([]);
  const [seePopUp, setseePopUp] = useState();
const Bookings = ({ receiveDateForbooking }) => {
  const [getdataFromLS, SetGetdataFromLS] = useState([]);
  const [seePopUp, setseePopUp] = useState();

  const closeBookingPopUp = () => {
    setseePopUp(false);
  };
  const openPopUpBookings = (i) => {
    setseePopUp(i);
    console.log(i);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(receiveDateForbooking));
  }, [receiveDateForbooking]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      SetGetdataFromLS(data);
    }
  }, [receiveDateForbooking]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      SetGetdataFromLS(data);
    }
  }, [receiveDateForbooking]);

  const handleCancleClick = (i) => {
    const deteleData = getdataFromLS.slice(0, getdataFromLS.length);
    deteleData.splice(i, 1);
    deteleData.splice();
    SetGetdataFromLS(deteleData);
  };
  const bookedRoms = getdataFromLS.map((bookedRoom, i) => (
    <tr key={i} className="room-booked">
      <th scope="row">{i + 1}</th>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.name}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.email}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.room.name}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.date}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.time}</td>
      <td onClick={() => handleCancleClick(i)} className="text-center">
        <i className="text-danger cancleBtn  bi  bi-x-octagon-fill" id="1"></i>
      </td>
    </tr>
  ));
  const popUpRoomData = getdataFromLS.map((bookedRoom, i) => {
    if (seePopUp === i)
      return (
        <div className="position-fixed book-room-popup" key={i}>
          <h1 className="text-end  w-100">
            <i
              className="text-warning bi closePopopBookings bi-x-octagon-fill"
              onClick={closeBookingPopUp}
            ></i>
          </h1>
          <div className="row box-booked-room-info ">
            <div className="col border bg-white">
              <p className="text-primary text-center fw-bold p-2">
                Your details
              </p>
              <div className="p-2">
                <div>
                  <strong className="me-2 pb-1">Name:</strong>
                  <span>{bookedRoom.name}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Email:</strong>
                  <span>{bookedRoom.email}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Phone:</strong>
                  <span>{bookedRoom.phone}</span>
                </div>
              </div>
            </div>
            <div className="col border bg-white">
              <p className="text-primary text-center fw-bold p-2">
                Room details
              </p>
              <div className="p-2">
                <div>
                  <strong className="me-2 pb-1">Room:</strong>
                  <span>{bookedRoom.room.name}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Location:</strong>
                  <span>{bookedRoom.room.location}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Seats:</strong>
                  <span>{bookedRoom.room.seats}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Date of use: </strong>
                  <span>{bookedRoom.date}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Time of use: </strong>
                  <span>{bookedRoom.time}</span>
                </div>
              </div>
            </div>
  const handleCancleClick = (i) => {
    const deteleData = getdataFromLS.slice(0, getdataFromLS.length);
    deteleData.splice(i, 1);
    deteleData.splice();
    SetGetdataFromLS(deteleData);
  };
  const bookedRoms = getdataFromLS.map((bookedRoom, i) => (
    <tr key={i} className="room-booked">
      <th scope="row">{i + 1}</th>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.name}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.email}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.room.name}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.date}</td>
      <td onClick={() => openPopUpBookings(i)}>{bookedRoom.time}</td>
      <td onClick={() => handleCancleClick(i)} className="text-center">
        <i className="text-danger cancleBtn  bi  bi-x-octagon-fill" id="1"></i>
      </td>
    </tr>
  ));
  const popUpRoomData = getdataFromLS.map((bookedRoom, i) => {
    if (seePopUp === i)
      return (
        <div className="position-fixed book-room-popup" key={i}>
          <h1 className="text-end  w-100">
            <i
              className="text-warning bi closePopopBookings bi-x-octagon-fill"
              onClick={closeBookingPopUp}
            ></i>
          </h1>
          <div className="row box-booked-room-info ">
            <div className="col border bg-white">
              <p className="text-primary text-center fw-bold p-2">
                Your details
              </p>
              <div className="p-2">
                <div>
                  <strong className="me-2 pb-1">Name:</strong>
                  <span>{bookedRoom.name}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Email:</strong>
                  <span>{bookedRoom.email}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Phone:</strong>
                  <span>{bookedRoom.phone}</span>
                </div>
              </div>
            </div>
            <div className="col border bg-white">
              <p className="text-primary text-center fw-bold p-2">
                Room details
              </p>
              <div className="p-2">
                <div>
                  <strong className="me-2 pb-1">Room:</strong>
                  <span>{bookedRoom.room.name}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Location:</strong>
                  <span>{bookedRoom.room.location}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Seats:</strong>
                  <span>{bookedRoom.room.seats}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Date of use: </strong>
                  <span>{bookedRoom.date}</span>
                </div>
                <div>
                  <strong className="me-2 pb-1">Time of use: </strong>
                  <span>{bookedRoom.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  });
      );
  });
  return (
    <div className="bg-light container-fluid bookings row bg-white">
      <h1 className="my-5 lead text-primary fw-bold text-center py-2">
        Your Bookings are listed here
      </h1>
      <div className="col-12">
        {getdataFromLS.length === 0 ? (
          <p className=" mt-5 text-center text-danger fw-bold">
            No booked rooms! Go to rooms tab to book yours now!
          </p>
        ) : (
          <table className="table">
            <thead className="thead-light bg-light fw-bold">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Names</th>
                <th scope="col">Email</th>
                <th scope="col">Rooms</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>{bookedRoms}</tbody>
          </table>
        )}
        {popUpRoomData}
      </div>
    </div>
  );
};
export default Bookings;
    <div className="bg-light container-fluid bookings row bg-white">
      <h1 className="my-5 lead text-primary fw-bold text-center py-2">
        Your Bookings are listed here
      </h1>
      <div className="col-12">
        {getdataFromLS.length === 0 ? (
          <p className=" mt-5 text-center text-danger fw-bold">
            No booked rooms! Go to rooms tab to book yours now!
          </p>
        ) : (
          <table className="table">
            <thead className="thead-light bg-light fw-bold">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Names</th>
                <th scope="col">Email</th>
                <th scope="col">Rooms</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>{bookedRoms}</tbody>
          </table>
        )}
        {popUpRoomData}
      </div>
    </div>
  );
};
export default Bookings;
