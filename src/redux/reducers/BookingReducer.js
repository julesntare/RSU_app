import {
  CREATE_BOOKING,
  DELETE_ALL_BOOKING,
  DELETE_BOOKING,
  GET_BOOKING,
  GET_BOOKING_BY_ID,
} from "../actions/BookingActions";

const initialState = [];

const BookingReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKING: {
      return [...action.payload];
    }
    case GET_BOOKING_BY_ID: {
      return action.payload;
    }
    case CREATE_BOOKING: {
      return [...action.payload];
    }
    case DELETE_BOOKING: {
      return [...action.payload];
    }
    case DELETE_ALL_BOOKING: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default BookingReducer;
