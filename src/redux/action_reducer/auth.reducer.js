import {AUTH, LOGOUT} from "./auth.action"

let auth_reducer = (state = {authData: null} , action) =>{
    
    switch(action.type){
        case AUTH :           
        //    console.log("action.payload", action.payload)
           localStorage.setItem('profile', JSON.stringify({...action?.payload}))
           return{ ...state, authData: action?.payload};
        case LOGOUT:
            localStorage.clear();
            return{ ...state, authData: null};

        default:
            return state;
    }
}

export {auth_reducer};