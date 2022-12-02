import React, {useEffect, useState} from 'react';
import './App.scss';
import NavBar from './Components/Navbar/Navbar';
import Buildings from './Components/Buildings/Buildings';
import Footer from './Components/Footer/Footer';
import Rooms from './Components/Rooms/Rooms';
import AllRooms from "./Components/AllRooms/AllRooms";
import Timetable from "./Components/Timetable/Timetable";
import Bookings from "./Components/Bookings/Bookings";
import Map from "./Components/Maps/Map";
import Enquiry from "./Components/Enquiry/Enquiry";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import BookingForm from './Components/BookingForm/BookingForm';


function App() {
  useEffect(() => {
    document.body.classList.add('body-animation'); 
  }, []);
  const [getClickedRoomForBooking, setGetClickedRoomForBooking] = useState({});
  const [getClickedBuilding, setGetClickedBuilding] = useState({})
  const [showRooms, setShowRooms] = useState(true);
  // const  [hideFilterOnHomePage, setHideFilterOnHomePage] =useState(true)


  return (
    <div className="app container-fluid bg-white ">
      <div className=' bg-danger container-fluid bg-white position-relative alinks'>
          <NavBar />
          <Routes>
          <Route path='/'  element={
              <Buildings 
                setGetClickedBuilding = {setGetClickedBuilding} //get clicked building rooms
                allowRoomsRerender = {setShowRooms} //at nth click you will see rooms
              />
          }/>
          </Routes>
          <Routes>
            <Route  path='/allrooms'
               element={
                <AllRooms 
                  setGetClickedRoomForBooking = {setGetClickedRoomForBooking}
                   />
              }/>
          </Routes>
          <Routes>
            <Route path='/timetable'  element={<Timetable />}/>
          </Routes>
          <Routes>
            <Route path='/bookings'  element = {<Bookings />}/>
          </Routes>
          <Routes>
            <Route path='/maps'  element = {<Map />}/>
          </Routes>
          <Routes>
            <Route path='/enquiry'  element = {<Enquiry />}/>
          </Routes>
          <Routes>
            <Route path='/login'  element = {<Login />}/>
          </Routes>
        <Rooms 
          clickedHouseData= {getClickedBuilding} //fetch data rooms clicked  building
          allowRoomsRerender = {showRooms} //give news if allowed to see rooms
          closeRoomsTab = {setShowRooms} // will turn false when you click on close btn and them rooms off 
          setGetClickedRoomForBooking = {setGetClickedRoomForBooking}
        />
        <Routes>
          <Route  path="/bookingform" element={<BookingForm getClickedRoomForBooking = {getClickedRoomForBooking} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
