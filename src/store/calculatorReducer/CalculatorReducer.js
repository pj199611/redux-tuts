import * as actionTypes from "./CalculatoractionTypes";

const initialstate = {
  number: 0,
};

const CalculatorReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.Increment:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case actionTypes.Decrement:
      return {
        ...state,
        number: state.number - action.payload,
      };
    case actionTypes.Divide:
      return{
        ...state,
        number:state.number / action.payload
      }
    case actionTypes.Multiply:
      return{
        ...state,
        number:state.number *action.payload
      }
      case actionTypes.Modulus:
        return{
          ...state,
          number:state.number % action.payload
        }
    default:
      return state;
  }
};

export default CalculatorReducer;


