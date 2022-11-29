import React, { useState } from "react";
import "./bookings.scss";

const Bookings = () => {
  const [cancelOrder, setCancelOrder] = useState("");
  const[clickedId, stClickedId ] =useState("");
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const bookedDate = `${day}-${month}-${year}`;
  
  const handleCancleClick = (e)=>{
    stClickedId(e.target.id); //id of x icons
    let rowId = e.target.parentNode.getAttribute("postId");
    console.log(rowId); //not working, jus null??
    (clickedId === rowId)?setCancelOrder("cancel") : setCancelOrder("")
  }
  return (
        <div className="bg-light container-fluid bookings row bg-white">
          <h1 className="my-5 lead text-primary fw-bold text-center py-2">Your Bookings are listed here</h1>
          <div className="col-12">
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
              <tbody>
                <tr data-key={1} className={cancelOrder} postId="1">
                  <th scope="row">1</th>
                  <td>John Doe</td>
                  <td>Johndoe@gmail.com</td>
                  <td>Muhazi Conferrence hall</td>
                  <td>{bookedDate}</td>
                  <td>8h00 AM - 2h00 PM </td>
                  <td><i className="b text-danger cancleBtn bi-x-circle"  id="1" onClick={handleCancleClick}></i> </td>
                </tr>
                {/* codes down are to be deleted as we will use maping of the object data from those who booked*/}
                <tr data-key={2} className={cancelOrder} postId="2">
                  <th scope="row">2</th>
                  <td>John Doe</td>
                  <td>Johndoe@gmail.com</td>
                  <td>Muhabura hall</td>
                  <td>{bookedDate}</td>
                  <td>2h00 PM - 16h00 PM </td>
                  <td><i className="b text-danger cancleBtn bi-x-circle"  id="2" onClick={handleCancleClick}></i> </td>
                </tr>
                <tr data-key={3} className={cancelOrder} postId="3">
                  <th scope="row">3</th>
                  <td>John Doe</td>
                  <td>Johndoe@gmail.com</td>
                  <td>Ikaze Room-A</td>
                  <td>{bookedDate}</td>
                  <td>17h00 AM - 20h00 PM </td>
                  <td><i className="b text-danger cancleBtn bi-x-circle" id="3" onClick={ handleCancleClick}></i> </td>
                </tr>
                {/* upto here ---------- */}
              </tbody>
            </table>
          </div>
        </div> 
   )
}
export default Bookings
