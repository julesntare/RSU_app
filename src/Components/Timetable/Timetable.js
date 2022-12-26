import React, { useRef, useState } from "react";
import "./Timetable.scss";
import Accordion from "react-bootstrap/Accordion";
import { google } from "googleapis";

const Timetable = () => {
  const [calendars, setCalendars] = useState([]);

  const weekRef = useRef();

  const getCalendars = async () => {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({
      client_id: process.env.REACT_APP_CALENDAR_CLIENT_ID,
      client_secret: process.env.REACT_APP_CALENDAR_CLIENT_SECRET,
      redirect_uri: "http://localhost:3000",
    });
    const calendar = google.calendar({ version: "v3", auth });
    calendar.calendarList.list((err, res) => {
      if (err) return console.error(err);
      const calendars = res.data.items;
      if (calendars.length) {
        setCalendars(calendars);
      } else {
        console.log("No calendars found.");
      }
    });
  };

  const filterWeeks = (e) => {
    e.preventDefault();
  };
  const [classRoomSearch, setClassRoomSearch] = useState("");
  const classRoomChange = (e) => {
    setClassRoomSearch(e.target.value);
  };
  const handleClassSubmit = (e) => {
    e.preventDefault();
  };
  //lest side sidenav bar
  const levels = Classes.map((level, i) => (
    <Accordion key={i}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{level.level}</Accordion.Header>
        <Accordion.Body className="bg-light d-flex flex-column">
          <p className="fw-bold">Classes:</p>
          {level.classes.map((classroom, i) => (
            <small key={i} className="ps-1 classroom w-100">
              {classroom.class}
            </small>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ));

  return (
    <div className="bg-white container-fluid mt-3 row h-100">
      <div className="col-12 col-lg-3 bg-light sidenav-box box py-2">
        <form onSubmit={handleClassSubmit} className="mb-3">
          <label htmlFor="classroom" className=" text-primary fw-bold ms-3">
            <small>Search your Class </small>
          </label>
          <input
            onChange={classRoomChange}
            id="classroom"
            name="classroom"
            value={classRoomSearch}
            className="form-control ps-3 class-search-input"
          />
        </form>
        {levels}
      </div>
      <div className="col-12 col-lg-9 display-box box py-2">
        <div className="d-flex justify-content-between">
          <form
            onSubmit={filterWeeks}
            style={{ width: "8rem" }}
            className="mb-2"
          >
            <label htmlFor="weeks" className=" text-primary fw-bold">
              Filter weeks
            </label>
            <select
              className="form-select"
              defaultValue={"weeks"}
              aria-label="Default select example"
              ref={weekRef}
            >
              {Classes[0].classes[0].timetable.map((week) => (
                <option key={week.week}>{week.week}</option>
              ))}
            </select>
          </form>
          <div className="d-flex justify-content-center align-items-center">
            <p className="fw-bold dateRange text-dark">
              {" "}
              2022-12-03 to 2022-12-13
            </p>
          </div>
        </div>
        <div>
          <button onClick={getCalendars}>Get Calendars</button>
          {calendars.length > 0 && (
            <ul>
              {calendars.map((calendar) => (
                <li key={calendar.id}>{calendar.summary}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Timetable;
