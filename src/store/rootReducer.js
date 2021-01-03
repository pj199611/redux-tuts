import {combineReducers} from "redux";
import CalculatorReducer from "./calculatorReducer/CalculatorReducer";
import AttendenceReducer from "./AttendenceReducer/AttendenceReducer";

 const rootReducer=combineReducers({

    CalculatorReducer:CalculatorReducer,
    AttendenceReducer:AttendenceReducer
})

export default rootReducer;