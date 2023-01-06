import React, { useRef, useState, useEffect } from "react";
import "./BookingForm.scss";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";

export default function BookingForm({ getClickedRoomForBooking, saveData }) {
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([
    {
      date: "2023-01-01",
      time: "08:00",
    },
    {
      date: "2023-01-01",
      time: "14:00",
    },
    {
      date: "2023-01-02",
      time: "08:00",
    },
    {
      date: "2023-01-02",
      time: "11:00",
    },
    {
      date: "2023-01-04",
      time: "08:00",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleEventClick(event) {
    console.log(event.event);
    setSelectedEvent(event.event);
    setShowModal(true);
  }

  // check if logged in and change ActiveLink to avatar
  const checkLoggedIn = () => {
    if (!localStorage.getItem("rsu_token")) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const HandleBookings = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3 className="h2 my-4 text-dark titles-buildings fw-bold w-100 text-center">
        Request this room
      </h3>
      <div className="row">
        <div className="col-12 col-md-6 p-3 pb-5">
          <div className="info-box border d-flex flex-column justify-content-between p-4 h-100">
            <div className="info">
              <h4 className="title-room text-center mb-3">Room info:</h4>
              <div className="mb-2">
                <span className="me-2">Room Name:</span>
                <span className="fw-bold">
                  <small>{getClickedRoomForBooking.name}</small>
                </span>
              </div>
              <div className="mb-2">
                <span className="me-3 text-underline">Location:</span>
                <span className="fw-bold">
                  <small>{getClickedRoomForBooking.location}</small>
                </span>
              </div>
              <div className="mb-2">
                <span className="me-3 text-underline">Use:</span>
                <span className="fw-bold">
                  <small>{getClickedRoomForBooking.use}</small>
                </span>
              </div>
              <div className="mb-2">
                <span className="me-3 text-underline">Capacity:</span>
                <small>
                  <span className="me-2 fw-bold">
                    {getClickedRoomForBooking.seats}
                  </span>
                  <strong>Seats</strong>
                </small>
              </div>
            </div>
            <div className="mt-auto contacts">
              <h4 className="title-room text-center mb-3">
                Reservations for <i>P001</i>
              </h4>
              {/* use react calendar datepicker component to display dates and times booked */}
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                eventRender={(event, element) => {
                  if (event.type === "type1") {
                    element.addClass("bg-primary");
                  } else if (event.type === "type2") {
                    element.addClass("bg-secondary");
                  }
                }}
                eventClick={handleEventClick}
                events={[
                  {
                    title: "Learning in asfhsfaskfashkfaskfbhs sjshkbas ksfk",
                    start: "2023-01-04T14:00:00",
                    end: "2023-01-04T17:00:00",
                    type: "type1",
                  },
                  {
                    title: "event 2",
                    start: "2023-01-06T08:00:00",
                    end: "2023-01-06T11:00:00",
                  },
                ]}
              />
              {/* generate react bootstrap modal like of google calendar event popup modal */}
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body>
                  <BookingModal setShowModal={setShowModal} />
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3 pb-5">
          <div className="form-box p-4">
            <h4 className="form-title fw-bold text-center">
              {" "}
              Fill this below information
            </h4>
            <form className="p-3" onSubmit={HandleBookings}>
              <fieldset>
                <legend>Activity</legend>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3 mt-1 required"
                    id="activityName"
                    placeholder="Enter activity name"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control mb-3 mt-1"
                    id="activityDescription"
                    rows="3"
                    placeholder="Enter activity Description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <Select
                    placeholder="How often?"
                    options={[
                      { value: "Once", label: "Once" },
                      { value: "Whole week", label: "Whole week" },
                      { value: "Whole month", label: "Whole month" },
                      { value: "Whole semester", label: "Whole semester" },
                    ]}
                    className="w-100 mb-3 mt-1 required"
                    id="hoursRange"
                    aria-label=".form-select-sm example"
                  />
                </div>
                <div className="form-group">
                  <DatePicker
                    value={dates}
                    onChange={setDates}
                    containerClassName="w-100"
                    inputClass="w-100 form-control mb-3 mt-1 required"
                    placeholder="Select activity date(s)..."
                    format="YYYY-MM-DD"
                    multiple
                  />
                </div>
                <div className="form-group">
                  <Select
                    placeholder="Select activity starting time..."
                    options={[
                      { value: "08:00", label: "08:00" },
                      { value: "09:00", label: "09:00" },
                      { value: "10:00", label: "10:00" },
                    ]}
                    className="w-100 mb-3 mt-1 required"
                    id="hoursRange"
                    aria-label=".form-select-sm example"
                  />
                </div>
                <div className="form-group">
                  <Select
                    placeholder="Select activity ending time..."
                    options={[
                      { value: "08:00", label: "08:00" },
                      { value: "09:00", label: "09:00" },
                      { value: "10:00", label: "10:00" },
                    ]}
                    className="w-100 mb-3 mt-1 required"
                    id="hoursEndRange"
                    aria-label=".form-select-sm example"
                  />
                </div>
              </fieldset>
              <div className="form-group">
                <textarea
                  className="form-control mb-3 mt-1"
                  id="activityRequests"
                  rows="3"
                  placeholder="Any additional information or requests?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary fw-bold btn-booking mt-2 w-100"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
