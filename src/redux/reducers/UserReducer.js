import {
  CREATE_USER,
  DELETE_ALL_USER,
  DELETE_USER,
  GET_USER,
  GET_USER_BY_ID,
  MODIFY_USER,
} from '../actions/UserActions';

const initialState = [];

const UserReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      return [...action.payload];
    }
    case GET_USER_BY_ID: {
      return action.payload;
    }
    case CREATE_USER: {
      return [...action.payload];
    }
    case DELETE_USER: {
      return [...action.payload];
    }
    case MODIFY_USER: {
      return [...action.payload];
    }
    case DELETE_ALL_USER: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default UserReducer;
