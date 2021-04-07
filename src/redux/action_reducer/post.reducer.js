import {GETPOSTS, PUTPOSTS, UPDATEPOSTS, DELETEPOSTS, LIKEPOSTS} from "./post.action"

let initial_state  = {
    data : [],
   
}

let post_reducer = (state = [], action) =>{
    console.log("action", action)
    switch(action.type){
        case GETPOSTS :           
            return action.payload
            
        case PUTPOSTS :           
            return [
                ...state,
               action.payload,
            ]
        case UPDATEPOSTS :           
            return state.map((post) => post._id === action.payload._id ? action.payload : post)
        case DELETEPOSTS :           
            return state.filter((post) => post._id != action.payload)  

        case LIKEPOSTS :           
            return state.map((post) => post._id === action.payload._id ? action.payload : post)
        default:
            return state;
    }
}

export {post_reducer};