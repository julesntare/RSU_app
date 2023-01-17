import axios from 'axios';

export const GET_OFFICE = 'GET_OFFICE';
export const GET_OFFICE_BY_ID = 'GET_OFFICE_BY_ID';
export const CREATE_OFFICE = 'CREATE_OFFICE';
export const DELETE_OFFICE = 'DELETE_OFFICE';
export const MODIFY_OFFICE = 'MODIFY_OFFICE';
export const DELETE_ALL_OFFICE = 'DELETE_ALL_OFFICE';

export const getOffice = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_RSU_API_URL}/offices/all`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_OFFICE,
        payload: data,
      });
    });
};

export const getBuildingByID = (id) => (dispatch) => {
  fetch(`${process.env.REACT_APP_RSU_API_URL}/offices/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_OFFICE_BY_ID,
        payload: data,
      });
    });
};

export const deleteOffice = (id) => (dispatch) => {
  axios.post('/api/offices/delete', { id }).then((res) => {
    dispatch({
      type: DELETE_OFFICE,
      payload: res.data,
    });
  });
};

export const deleteAllOffice = () => (dispatch) => {
  axios.post('/api/offices/delete-all').then((res) => {
    dispatch({
      type: DELETE_ALL_OFFICE,
      payload: res.data,
    });
  });
};

export const createOffice = (data) => (dispatch) => {
  fetch(`${process.env.REACT_APP_RSU_API_URL}/offices`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('rsuToken')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
    }),
  }).then((res) => {
    dispatch({
      type: CREATE_OFFICE,
      payload: res,
    });
  });
};
