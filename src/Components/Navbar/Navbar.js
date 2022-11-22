import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo/urLogo.png";


const NavigationBar = () =>{
  const time = new Date();
  const placeholderTime = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()} `;

//on input/select change
  const handleChange = (value) =>{
    console.log(value);
  }
  //submit data
  const handleSubmit = (data) =>{
    console.log(data);
  }
    return (
      <>
            {/* big navbar menu */}
        <nav className="navbar container navbar-expand-lg nav-web text-white px-3  d-flex mt-0 mb-1">
            <img
              alt=""
              width="50px"
              height ="50px"
              src={Logo}
              className="d-inline-block align-top me-lg-5 rounded-pill mg-fluid "
            />
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav  w-100 me-auto d-flex ">
                  <a className="nav-link active ms-lg-5" aria-current="page" href="#">Home</a>
                  <a className="nav-link ms-lg-5" href="#">Rooms</a>
                  <a className="nav-link ms-lg-5" href="#">Timetable</a>
                  <a className="nav-link ms-lg-5 " href="#">Bookings</a>
                  <a className="nav-link ms-lg-5" href="#">Maps</a>
                  <a className="nav-link ms-lg-5" href="#">Enquiry</a>
                  <a href="#" className="account-user nav-link me-lg-5">Login <i className="bi ms-3 bi-person-circle"></i></a>
              </div>
          </div>
        </nav>
        {/* Filters down */}
        <nav className="navbar container filter  p-2 m mt-3 sticky-filter bg-none">
            <h3 className="lead bg-none fw-bold  text-start  m-0 filter-text">Filters</h3>
            <form className="d-flex w-100 align-items-center form m-0 " role="filter" onSubmit={handleSubmit}>
              <div className=" d-flex input-box me-2 h-100 justify-content-between align-items-center">
                <select  value="" onChange={handleChange}   className="form-select box-filter form-select-sm  me-2"  aria-label=".form-select-lg example">
                  <option selected disabled className="select-placeholder">Room name</option>
                  <option value="1">Audi 1</option>
                  <option value="2">Muhazi room 2</option>
                  <option value="3">Karisimbi lab</option>
                </select>
                <select onChange={handleChange} value="Room Capacity"className="form-select box-filter form-select-sm me-2" aria-label=".form-select-sm example">
                <option selected disabled className="select-placeholder">Room Capacity</option>
                  <option value="&lt;300">&lt;300</option>
                  <option value="&lt;200">&lt;200</option>
                  <option value="&lt;100">&lt;100</option>
                  <option value="&lt;50">&lt;50</option>
                </select>
                <input onChange={handleChange}  className="form-control form-select-sm box-filter me-2" value={placeholderTime} type="date"  aria-label="time" />
                <select  onChange={handleChange} className="form-select form-select-sm box-filter me-2" aria-label=".form-select-sm example">
                  <option value="08:00 - 11:00">08:00 - 11:00</option>
                  <option value="11:00 - 02:00">11:00 - 02:00</option>
                  <option value="02:00 - 05:00">02:00 - 05:00</option>
                </select>
              </div>
              <button className="btn-p  w-10" type="submit">Filter</button>
            </form>
      </nav>     
      </>
    );

}
export default NavigationBar;
