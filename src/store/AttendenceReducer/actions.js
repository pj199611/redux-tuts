import * as actionTypes from "./actionTypes";
import axios from "axios";

export const Present = (payload) => {
  return {
    type: actionTypes.Present,
    payload: payload,
  };
};

export const Absent = (payload) => {
  return {
    type: actionTypes.Absent,
    payload: payload,
  };
};

export const sync = () => {
  return {
    type: actionTypes.ImgShow,
  };
};

export const async = () => {
  return {
    type: actionTypes.ImgHide,
  };
};

export const imagesShow = () => {
  return (dispatch) => {
    dispatch(sync());

    setTimeout(() => {
      dispatch(async());
    }, 4000);
  };
};
