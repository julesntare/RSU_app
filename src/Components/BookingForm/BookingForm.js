import React from "react";
import "./BookingForm.scss";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom" ;
import Logo from "../../assets/logo/urLogo.png";


export default function BookingForm({getClickedRoomForBooking}){
    console.log(getClickedRoomForBooking); //all chosen rooms for booking are listed here!
    const HandleBookings = (e)=>{
        e.preventDefault()
        console.log("submitted");
    }

    return (
        <div className="container-fluid bg-white booking-form">
            <div className="container-fluid bg-light mb-3">
                <div className="header mt-0 p-2 w-100  d-flex">
                    <img src={Logo} className="img header-img me-5" width="50px " height="50px"/>
                    <h1 className="ms-auto me-auto text-primary fw-bold">RSU</h1>
                </div>
            </div>
            <Link to={-1} className="back-btn lead fw-bold ms-5 mb-4">Back </Link>
            <h4 className="text-dark  mt-3 text-center h4">Request a free room for use in College of Science and Technology</h4>
            <div className="row">
                <div className="col-12 col-md-6 p-3 pb-5">
                    <div className="info-box border d-flex flex-column justify-content-between p-4 h-100">
                        <div className="info">
                        <h4 className="title-room text-center mb-3">Room info:</h4>
                        <div className="mb-2">
                            <span className="me-2">Chosen Room:</span>
                            <span className="fw-bold">
                                <small>{getClickedRoomForBooking.name}</small></span>
                            </div>
                        <div className="mb-2">
                            <span className="me-3 text-underline">Location:</span>
                            <span className="fw-bold">
                                <small>{getClickedRoomForBooking.location}</small></span>
                            </div>
                        <div className="mb-2">
                            <span className="me-3 text-underline">Use:</span>
                            <span className="fw-bold">
                                <small>{getClickedRoomForBooking.use}</small></span>
                            </div>
                        <div className="mb-2">
                            <span className="me-3 text-underline">Capacity:</span>
                            <small>
                                    <span className="me-2 fw-bold">
                                    {getClickedRoomForBooking.seats}</span><strong>Seats</strong>
                            </small>
                        </div>
                        </div>
                        <div className="mt-auto contacts">
                            <h4 className="title-room text-center mb-3">Met any problem? </h4>
                            <p className=" text-center mb-3">Contact us here </p>
                            <div className=" d-flex flex-column px-1 px-md-5 py-2">
                                <a className="mb-3"  href="tel:+6494461709">
                                    <span className="me-1 me-md-3"><i className="bi bi-telephone "></i></span>
                                    <span >+25078 00 00 00</span>
                                </a>
                                <a className="mb-3" href="mailto:cst@ac.rw?Subject=My%20Query">
                                    <span className="me-1 me-md-3"><i className="bi  bi-envelope-at-fill"></i></span>
                                    <span>cst@ac.rw</span>
                                </a>
                            </div>
                            </div>
                        </div>
                </div>
                <div className="col-12 col-md-6 p-3 pb-5">
                    <div className="form-box p-4">
                        <h4 className="form-title fw-bold text-center"> Fill this form below</h4>
                        <form className="p-3" onSubmit={HandleBookings}>
                        <div className="form-group">
                                <label htmlFor="name">Your names</label>
                                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="eg: John Doe"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"> Phone number:</label>
                                <input type="tel" class="form-control" id="phone" name="phone" placeholder="eg: +250 -- -- -- ---"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="time"> Date</label>
                                <div className="d-flex date-box">
                                    <input type="date" class="form-control me-2" id="time" name="time" required />
                                    <select type="tel" class="form-select" aria-label="Default select" id="timeRange" name="timeRange" required >
                                        <option selected disabled>Select a time Range </option>
                                        <option>8:00 AM - 11:00 PM</option>
                                        <option>11:00 AM - 14:00 PM</option>
                                        <option>14:00 AM - 17:00 PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check" />
                                <label clasNames="form-check-label " htmlFor="check" required>
                                    <small>By Submitting your information, means you agree to the <strong>Terms and Conditions</strong></small>
                                </label>
                            </div>
                            <button type="submit" className="btn fw-bold btn-booking mt-2 w-100">Submit Request</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="container-fluid mt-5">
                <Footer />
            </div>
        </div>
    )
}
