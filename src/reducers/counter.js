import { act } from "react-dom/test-utils";

const counterReducer = (state=0, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload; //in case we want to add a specific number
        case 'DECREMENT':
            return state = state - 1;
        default:
            return state
    }
}

export default counterReducer;