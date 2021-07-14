import {GET_POSTS_BY_SEARCH, GETPOSTS, PUTPOSTS, UPDATEPOSTS, DELETEPOSTS, LIKEPOSTS, START_LOADING, END_LOADING} from "./post.action"

let initial_state  = {
    data : [],
   
}

let post_reducer = (state = [], action) =>{
    console.log("action", action)
    switch(action.type){
        case GETPOSTS : 
            // console.log("GETPOSTS", action.payload)          
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

        case GET_POSTS_BY_SEARCH:
            return action.payload.data 

        default:
            return state;
    }
}

export {post_reducer};