import React from "react";
import "./Timetable.scss";
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Classes from "../../assets/APIs/classes.json";

const Timetable = () => {
  const levels = Classes.map((level, i)=><p key={i}>{level.level}</p>)
  return (
      <div className='bg-white container-fluid mt-3 row h-100'>
        <div className="col-3 bg-primary aidenav-box box py-2">~
              
          {levels}
        </div>
        <div className="col-9 bg-light display-box box py-2">
          body

        </div>
      </div>
  )}
export default Timetable;
