import React, { useRef, useState } from "react";
import "./Timetable.scss";
import Accordion from 'react-bootstrap/Accordion';
import Classes from "../../assets/APIs/classes.json";

const Timetable = () => {

  const weekRef = useRef()

  const filterWeeks = (e)=>{
    e.preventDefault();
  }
  const [classRoomSearch, setClassRoomSearch] = useState("")
  const classRoomChange = (e)=>{
    setClassRoomSearch(e.target.value)
  }
  const handleClassSubmit = (e)=>{
    e.preventDefault();
  }
  //lest side sidenav bar
  const levels = Classes.map((level, i)=>(
        <Accordion key={i}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{level.level}</Accordion.Header>
            <Accordion.Body className="bg-light d-flex flex-column">
              <p className="fw-bold">Classes:</p>
            {level.classes.map((classroom, i)=>(
                  < small key={i} className="ps-1 classroom w-100">{classroom.class}</small>
                ))
                }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
  ))
  
return (
      <div className='bg-white container-fluid mt-3 row h-100'>
        <div className="col-12 col-lg-3 bg-light sidenav-box box py-2">
          <form onSubmit={handleClassSubmit} className="mb-3">
              <label htmlFor="classroom" className=" text-primary fw-bold ms-3"><small>Search your Class </small></label>
              <input  onChange={classRoomChange} id="classroom" name="classroom" value={classRoomSearch} className="form-control ps-3 class-search-input" />
            </form>
                {levels}
        </div>
        <div className="col-12 col-lg-9 display-box box py-2">
          <div className="d-flex justify-content-between">
          <form onSubmit={filterWeeks} style={{width: "8rem"}} className="mb-2">
            <label htmlFor="weeks" className=" text-primary fw-bold">Filter weeks</label>
            <select className="form-select" defaultValue={"weeks"} aria-label="Default select example" ref={weekRef}>
             {Classes[0].classes[0].timetable.map(week=><option key={week.week}>{week.week}</option>)}
          </select>
          </form>
          <div className="d-flex justify-content-center align-items-center">
            <p className="fw-bold dateRange text-dark">  2022-12-03 to 2022-12-13</p>
          </div>
          </div>
          <div className="bg-white calender container-fluid d-flex flex-column h-100 w-100 p-2">
                  <ul className="weekdays bg-white">
                    <li className="col">MON</li>
                    <li className="col">TUE</li>
                    <li className="col">WED</li>
                    <li className="col">THUS</li>
                    <li className="col">FRI</li>
                    <li className="col">SAT</li>
                    <li className="col">SUN</li>
                  </ul>
                <ul className="days bg-white"> 
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>08h00 -11h00</span>
                      <span><strong className="me-1"></strong> Math</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column  h-100 justify-content-center align-items-center">
                    <span>08h00 -11h00</span>
                      <span><strong className="me-1"></strong> Structure analysis</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>08h00 -11h00</span>
                      <span><strong className="me-1"></strong> Fluid machanics</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>08h00 -11h00</span>
                      <span><strong className="me-1"></strong> --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column  h-100 justify-content-center align-items-center">
                    <span>08h00 -11h00</span>
                      <span><strong className="me-1"></strong> Hydrology</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>08h00 -11h00</span>
                      <span><strong className="me-1"></strong> --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>08h00 -11h00</span>
                      <span><strong className="me-1"></strong> --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>11h00 - 14h00</span>
                      <span><strong className="me-1"></strong>  - -</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>11h00 - 14h00</span>
                      <span><strong className="me-1"></strong>  - -</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>11h00 - 14h00</span>
                      <span><strong className="me-1"></strong>  - -</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>11h00 - 14h00</span>
                      <span><strong className="me-1"></strong>  Geology</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>11h00 - 14h00</span>
                      <span><strong className="me-1"></strong>  - -</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>11h00 - 14h00</span>
                      <span><strong className="me-1"></strong>  - -</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>11h00 - 14h00</span>
                      <span><strong className="me-1"></strong>  English</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 w-100  justify-content-center align-items-center">
                    <span>14h00 - 17h00</span>
                      <span> constr material</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>14h00 - 17h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>14h00 - 17h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>14h00 - 17h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>14h00 - 17h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>14h00 - 17h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>14h00 - 17h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>17h00 - 20h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>17h00 - 20h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>17h00 - 20h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>17h00 - 20h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>17h00 - 20h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>17h00 - 20h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>
                  <li >
                   <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <span>17h00 - 20h00</span>
                      <span><strong className="me-1"></strong>  --</span>
                   </div>
                  </li>

                  
                </ul>  
          </div>
        </div>
      </div>
  )}
export default Timetable;
