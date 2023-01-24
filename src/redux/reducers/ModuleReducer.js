import {
  CREATE_MODULE,
  DELETE_ALL_MODULE,
  DELETE_MODULE,
  GET_MODULE,
  GET_MODULE_BY_ID,
} from "../actions/ModuleActions";

const initialState = {
  modules: [],
};

const ModuleReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_MODULE: {
      return { ...state, modules: action.payload };
    }
    case GET_MODULE_BY_ID: {
      return action.payload;
    }
    case CREATE_MODULE: {
      return [...action.payload];
    }
    case DELETE_MODULE: {
      return [...action.payload];
    }
    case DELETE_ALL_MODULE: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default ModuleReducer;
