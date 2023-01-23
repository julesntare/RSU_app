import { FormControl, TextField } from "@mui/material";
import React from "react";
import Select from "react-select";

const options = [
  { value: "classroom", label: "Classroom" },
  { value: "laboratory", label: "Laboratory" },
  { value: "hall", label: "Hall" },
];

const BasicRequirements = ({ bookingData, setBookingData }) => {
  return (
    <>
      <FormControl style={{ width: "100%", zIndex: 9 }}>
        <Select
          options={options}
          value={bookingData.roomCategory || options[0]}
          error={bookingData.error && !bookingData.roomCategory}
          helperText={
            bookingData.error && !bookingData.roomCategory ? "Required" : ""
          }
          onChange={(selectedOption) =>
            setBookingData({ ...bookingData, roomCategory: selectedOption })
          }
          placeholder="Select room category"
          isSearchable
        />
      </FormControl>
      <TextField
        type="number"
        label="Activity Estimated Participants"
        id="activity-participants"
        value={bookingData.activityParticipants || ""}
        onChange={(event) =>
          setBookingData({
            ...bookingData,
            activityParticipants: event.target.value,
          })
        }
        error={bookingData.error && !bookingData.activityParticipants}
        helperText={
          bookingData.error && !bookingData.activityParticipants
            ? "Required"
            : ""
        }
        style={{ width: "100%", marginTop: "20px" }}
      />
    </>
  );
};

export default BasicRequirements;
