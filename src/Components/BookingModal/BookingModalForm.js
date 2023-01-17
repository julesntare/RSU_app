import { Select } from "@mui/material";
import React from "react";
import DatePicker from "react-multi-date-picker";
import "../BookingForm/BookingForm.scss";

const BookingModalForm = ({ setShowFormModal }) => {
  const submitBooking = (e) => {
    e.preventDefault();
    setShowFormModal(false);
  };

  return (
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
                  { value: "once", label: "Once" },
                  { value: "weekly", label: "weekly" },
                  { value: "monthly", label: "monthly" },
                  { value: "certain_days", label: "Certain days" },
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
            onClick={submitBooking}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModalForm;
