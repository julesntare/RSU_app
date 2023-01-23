import { Button } from "@mui/material";
import React, { useState } from "react";
import "../Bookings/Bookings.scss";
import BasicInfo from "./BookingSteps/BasicInfo";
import BasicRequirements from "./BookingSteps/BasicRequirements";
import SchedulesDetails from "./BookingSteps/SchedulesDetails/SchedulesDetails";

const BookingsForm = () => {
  const [bookingData, setBookingData] = useState({
    step: 0,
    error: false,
    isLastStep: false,
  });

  // go to previous step
  const handlePrevious = () => {
    setBookingData({ ...bookingData, step: bookingData.step - 1 });
  };

  // go to next step
  const handleNext = () => {
    console.log(bookingData);
    if (bookingData.step === 0) {
      if (
        !bookingData.activityType ||
        !bookingData.activityName ||
        !bookingData.activityDescription
      ) {
        setBookingData({ ...bookingData, error: true });
        return;
      }
      setBookingData({
        ...bookingData,
        error: false,
        step: bookingData.step + 1,
      });
    }
    if (bookingData.step === 1) {
      if (!bookingData.roomCategory || !bookingData.activityParticipants) {
        setBookingData({ ...bookingData, error: true });
        return;
      }
      setBookingData({
        ...bookingData,
        error: false,
        step: bookingData.step + 1,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookingData({
      ...bookingData,
      activityType: bookingData.activityType.value,
      activityName: bookingData.activityName,
      activityDescription: bookingData.activityDescription,
    });
  };

  // handle switch case for component to load on each step
  const SteppedComponent = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicInfo
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case 1:
        return (
          <BasicRequirements
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case 2:
        return (
          <SchedulesDetails
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      default:
        return (
          <BasicInfo
            bookingData={bookingData}
            setBookingData={setBookingData}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
    }
  };

  return (
    <div className="col-12 col-md-12">
      <div className="form-box p-4">
        <h4 className="form-title fw-bold text-center">
          {" "}
          Fill out the Below Information
        </h4>
        <div style={{ margin: "50px 0" }}>
          {SteppedComponent(bookingData.step)}
          <div style={{ marginTop: "30px" }}>
            {bookingData.step === 0 ? (
              <Button
                onClick={handleNext}
                type="button"
                style={{ float: "right" }}
                variant="contained"
                color="primary"
              >
                Continue
              </Button>
            ) : (
              <>
                {bookingData.isLastStep ? (
                  <Button
                    onClick={handleSubmit}
                    type="button"
                    style={{ float: "right" }}
                    variant="contained"
                    color="primary"
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    type="button"
                    style={{ float: "right" }}
                    variant="contained"
                    color="primary"
                  >
                    Continue
                  </Button>
                )}
                <Button
                  onClick={handlePrevious}
                  type="button"
                  style={{ float: "right", marginRight: "10px" }}
                  variant="contained"
                  color="secondary"
                >
                  Previous
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsForm;
