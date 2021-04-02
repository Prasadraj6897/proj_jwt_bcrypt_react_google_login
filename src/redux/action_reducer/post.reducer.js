import {GETPOSTS, PUTPOSTS} from "./post.action"

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
           
        default:
            return state;
    }
}

export {post_reducer};