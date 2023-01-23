import {
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import React from "react";
import Select from "react-select";

const options = [
  { value: "learning", label: "Learning" },
  { value: "meetup", label: "Meetup" },
  { value: "praying", label: "Praying" },
  { value: "publicTalks", label: "Public Talks" },
  { value: "practices", label: "Practices" },
  { value: "others", label: "Others" },
];

const BasicInfo = ({ bookingData, setBookingData }) => {

  return (
    <>
      <FormControl
        error={bookingData.error && !bookingData.activityType}
        style={{ width: "100%", zIndex: 9 }}
      >
        <Select
          labelId="activity-type-label"
          id="activity-type"
          options={options}
          value={bookingData.activityType || ""}
          helperText={
            bookingData.error && !bookingData.activityType ? "Required" : ""
          }
          onChange={(selectedOption) =>
            setBookingData({ ...bookingData, activityType: selectedOption })
          }
          placeholder="Select an activity type"
          isSearchable
        />
        <FormHelperText>
          {bookingData.error && !bookingData.activityType ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <TextField
        label="Activity Name"
        id="activity-name"
        value={bookingData.activityName || ""}
        onChange={(event) =>
          setBookingData({ ...bookingData, activityName: event.target.value })
        }
        error={bookingData.error && !bookingData.activityName}
        helperText={
          bookingData.error && !bookingData.activityName ? "Required" : ""
        }
        style={{ width: "100%", marginTop: "20px" }}
      />
      <TextField
        label="Activity Description"
        id="activity-description"
        value={bookingData.activityDescription || ""}
        onChange={(event) =>
          setBookingData({
            ...bookingData,
            activityDescription: event.target.value,
          })
        }
        error={bookingData.error && !bookingData.activityDescription}
        helperText={
          bookingData.error && !bookingData.activityDescription
            ? "Required"
            : ""
        }
        margin="normal"
        fullWidth
        multiline
        rows={3}
      />
    </>
  );
};

export default BasicInfo;
