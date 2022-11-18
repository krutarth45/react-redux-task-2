import {
  SET_ERROR,
  SET_LOADING,
  SET_SELECTED_ROW,
  SET_COMPONENT_DATA,
  SET_VIEW,
  GET_VIEW,
} from "./types";

export const fetchComponentData = (data) => {
  return {
    type: SET_COMPONENT_DATA,
    payload: data,
  };
};

export const fetchSelectedRecord = (data) => {
  return {
    type: SET_SELECTED_ROW,
    payload: data,
  };
};

export const setLoading = (data) => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};

export const setError = (data) => {
  return {
    type: SET_ERROR,
    payload: data,
  };
};
export const setView = (data) => {
  return {
    type: SET_VIEW,
    payload: data,
  };
};
export const getView = (data) => {
  return {
    type: GET_VIEW,
    payload: data,
  };
};
