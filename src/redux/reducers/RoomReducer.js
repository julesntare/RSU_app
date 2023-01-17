import {
  CREATE_ROOM,
  DELETE_ALL_ROOM,
  DELETE_ROOM,
  GET_ROOM,
  GET_ROOM_BY_ID,
  GET_ROOMS_BY_BUILDING_ID,
} from "../actions/RoomActions";

const initialState = [];

const RoomReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOM: {
      return [...action.payload];
    }
    case GET_ROOM_BY_ID: {
      return action.payload;
    }
    case GET_ROOMS_BY_BUILDING_ID: {
      return [...action.payload];
    }
    case CREATE_ROOM: {
      return [...action.payload];
    }
    case DELETE_ROOM: {
      return [...action.payload];
    }
    case DELETE_ALL_ROOM: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default RoomReducer;
