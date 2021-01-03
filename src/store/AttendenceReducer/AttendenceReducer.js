import * as AttendenceTypes from "./actionTypes";

const initialstate = {
  students: 0,
  show: false,
};

const AttendenceReducer = (state = initialstate, action) => {
  switch (action.type) {
    case AttendenceTypes.Present:
      return {
        ...state,
        students: state.students + action.payload,
      };
    case AttendenceTypes.Absent:
      return {
        ...state,
        students: state.students - action.payload,
      };
    case AttendenceTypes.ImgShow:
      return { ...state, show: true };
    case AttendenceTypes.ImgHide:
      return { ...state, show: false };

    default:
      return state;
  }
};

export default AttendenceReducer;
