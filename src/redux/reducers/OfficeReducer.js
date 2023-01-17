import {
  CREATE_OFFICE,
  DELETE_ALL_OFFICE,
  DELETE_OFFICE,
  GET_OFFICE,
  GET_OFFICE_BY_ID,
} from '../actions/OfficeActions';

const initialState = [];

const OfficeReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_OFFICE: {
      return [...action.payload];
    }
    case GET_OFFICE_BY_ID: {
      return action.payload;
    }
    case CREATE_OFFICE: {
      return [...action.payload];
    }
    case DELETE_OFFICE: {
      return [...action.payload];
    }
    case DELETE_ALL_OFFICE: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default OfficeReducer;
