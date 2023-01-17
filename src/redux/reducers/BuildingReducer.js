import {
  CREATE_BUILDING,
  DELETE_ALL_BUILDING,
  DELETE_BUILDING,
  GET_BUILDING,
  GET_BUILDING_BY_ID,
} from '../actions/BuildingActions';

const initialState = [];

const BuildingReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_BUILDING: {
      return [...action.payload];
    }
    case GET_BUILDING_BY_ID: {
      return action.payload;
    }
    case CREATE_BUILDING: {
      return [...action.payload];
    }
    case DELETE_BUILDING: {
      return [...action.payload];
    }
    case DELETE_ALL_BUILDING: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default BuildingReducer;
