import {PUTUSERDATA, GETUSERDATA} from "./action"

let initial_state  = {
    user : "",
   
}

let user_reducer = (state = initial_state, action) =>{
    // console.log("action", action)
    switch(action.type){
        case PUTUSERDATA :           
            return {
                ...state,
            }
            case GETUSERDATA :
           
            return {
                // state,
                User_Data :action.payload,
            }
        default:
            return state;
    }
}

export {user_reducer};