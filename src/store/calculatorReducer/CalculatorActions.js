import {Increment,Decrement,Multiply,Divide,Modulus} from "./CalculatoractionTypes";

export const INCREMENT=(payload)=>{
    return{
        type:Increment,
        payload:payload
    }
}

export const DECREMENT=(payload)=>{
    return{
        type:Decrement,
        payload:payload
    }
}


export const MULTIPLY=(payload)=>{
    return {
        type:Multiply,
        payload:payload
    }
}

export const DIVIDE=(payload)=>{
    return{
        type:Divide,
        payload:payload
    }
}

export const MODULUS=(payload)=>{
    return{
        type:Modulus,
        payload:payload
    }
}

