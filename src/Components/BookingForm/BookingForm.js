import React, { useState, useEffect } from "react";
import "./BookingForm.scss";
import "../BookingModal/BookingModalDetails.scss";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button, Modal } from "react-bootstrap";
import BookingModalDetails from "../BookingModal/BookingModalDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../redux/actions/RoomActions";
import { CircularProgress } from "@mui/material";
import { getBooking } from "../../redux/actions/BookingActions";

const BookingForm = () => {
  let { id } = useParams();
  const rooms = useSelector((state) => state.rooms);
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const selectedRoom = rooms.find((room) => room._id === id);
  const [bookedDates, setBookedDates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleEventClick(e) {
    setSelectedEvent(e.event._def.publicId);
    setShowModal(true);
  }

  useEffect(() => {
    dispatch(getRoom());
    dispatch(getBooking());
  }, [dispatch]);

  useEffect(() => {
    if (bookings.length > 0) {
      const bookedDates = bookings
        .filter((booking) => booking.room === selectedRoom._id)
        .map((booking) => {
          return {
            id: booking._id,
            title: booking.activity.activity_name,
            start: booking.activity.activity_starting_date,
            end: booking.activity.activity_ending_date,
          };
        });

      setBookedDates(bookedDates);
    }
  }, []);

  return (
    <>
      <h3 className="h2 my-4 text-dark titles-buildings fw-bold w-100 text-center">
        Request this room
      </h3>
      {rooms.length > 0 ? (
        <div className="row">
          <div className="col-12 col-md-12 p-3 pb-5">
            <div className="info-box border d-flex flex-column justify-content-between p-4 h-100">
              <div className="mt-auto contacts">
                <h4 className="title-room text-center mb-3">
                  Reservations for <i>{selectedRoom.room_name}</i>
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
                  events={bookedDates}
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
                    <BookingModalDetails setShowModal={setShowModal}
                      selectedEvent={selectedEvent}
                      bookings={bookings} />
                  </Modal.Body>
                </Modal>

                {/* booking form modal */}
                <Modal
                  show={showFormModal}
                  onHide={() => setShowFormModal(false)}
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Booking Form
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <BookingForm
                      setShowFormModal={setShowFormModal}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setShowFormModal(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default BookingForm;
