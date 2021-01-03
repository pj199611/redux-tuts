import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  INCREMENT,
  DECREMENT,
  MULTIPLY,
  DIVIDE,
  MODULUS,
} from "./store/calculatorReducer/CalculatorActions";

import * as AttendeceReducerAction from "./store/AttendenceReducer/actions";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const stateFromRedux = useSelector((state) => state.CalculatorReducer.number);
  const attendenceFromReduce=useSelector((state) => state.AttendenceReducer.students);
  const imgshowfromReducer=useSelector((state=>state.AttendenceReducer.show))
  
  console.log("-----redux thunk call initial state---->",imgshowfromReducer);

  return (
    <div className="main">
      <div className="buttons-container">
        <button onClick={() => dispatch(INCREMENT(5))}>Add</button>
        <button onClick={() => dispatch(DECREMENT(5))}>delete</button>
        <button onClick={() => dispatch(DIVIDE(2))}>divide</button>
        <button onClick={() => dispatch(MULTIPLY(5))}>Multiply</button>
        <button onClick={() => dispatch(MODULUS(5))}>Modulus</button>

        {/* type:increment:payload:5 */}
      </div>
      <h1 style={{ marginLeft: "50%" }}>{stateFromRedux}</h1>
      <hr/>
      <h1 style={{ marginLeft: "30%" }}>Attendence of students {attendenceFromReduce}</h1>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'200px',alignItems:'center'}}>

        <button onClick={()=>dispatch(AttendeceReducerAction.Present(1))}>Present</button>
        <button onClick={()=>dispatch(AttendeceReducerAction.Absent(1))}>Absent</button>
      </div>
      <hr/>
      <button onClick={()=>dispatch(AttendeceReducerAction.imagesShow())}>Redux Thunk Button</button>

      {imgshowfromReducer && <img style={{animation: 'rotation 2s infinite linear'}} src={logo} height="500" width="500" alt=""/>}
    </div>
  );
};

export default App;
