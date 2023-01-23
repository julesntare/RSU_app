import React, { useState } from "react";
import "./App.scss";
import NavBar from "./Components/Navbar/Navbar";
import Buildings from "./Components/Buildings/Buildings";
import Footer from "./Components/Footer/Footer";
import AllRooms from "./Components/AllRooms/AllRooms";
import Enquiry from "./Components/Enquiry/Enquiry";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Scroll from "./Components/Scroll";
import Scrollbar from "smooth-scrollbar";
import Maps from "./Components/Maps/Maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { AuthProvider } from "./contexts/JWTAuthContext";
import Bookings from "./Components/Bookings/Bookings";
import BookingsForm from "./Components/BookingModal/BookingsForm";

function App() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    // set smooth smooth-scrollbar to top
    Scrollbar.get(document.body).scrollTop = 0;

    // hide the button
    setShowButton(false);
  };

  return (
    <div className="app container-fluid bg-white ">
      <div className=" bg-danger container-fluid bg-white position-relative alinks">
        <AuthProvider>
          <NavBar />
        </AuthProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/buildings" element={<Buildings />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/allrooms"
            element={
              <AuthProvider>
                <AllRooms hasParam={false} />
              </AuthProvider>
            }
          />
        </Routes>
        {/* add route to /allrooms/:id */}
        <Routes>
          <Route
            path="/allrooms/:id"
            element={
              <AuthProvider>
                <AllRooms hasParam={true} />
              </AuthProvider>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/bookings"
            element={
              <AuthProvider>
                <Bookings />
              </AuthProvider>
            }
          />
        </Routes>
        <Routes>
          <Route path="/maps/:id" element={<Maps />} />
        </Routes>
        <Routes>
          <Route path="/maps" element={<Maps />} />
        </Routes>
        <Routes>
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/bookingform"
            element={
              <AuthProvider>
                <BookingsForm hasParam={false} />
              </AuthProvider>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/bookingform/:id"
            element={
              <AuthProvider>
                <BookingsForm />
              </AuthProvider>
            }
          />
        </Routes>
        {showButton && (
          <div onClick={scrollToTop} className="back-to-top">
            <a className="scroll-up" title="Back to Top">
              <FontAwesomeIcon icon={faAngleUp} />
            </a>
          </div>
        )}
        <Footer />
      </div>
      {/* update state in child component */}
      <Scroll setShowButton={setShowButton} showButton={showButton} />
    </div>
  );
}
export default App;
