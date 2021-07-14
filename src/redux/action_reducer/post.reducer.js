import {GET_POSTS_BY_SEARCH, GETPOSTS, PUTPOSTS, UPDATEPOSTS, DELETEPOSTS, LIKEPOSTS, START_LOADING, END_LOADING, FETCH_POST, COMMENT} from "./post.action"

let initial_state  = {
    data : [],
   
}

let post_reducer = (state = { isLoading: true, posts: [] }, action) =>{
    console.log("action", action)
    switch(action.type){
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };

        case GETPOSTS : 
            // console.log("GETPOSTS", action.payload)          
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            }

        case FETCH_POST:
            return { ...state, post: action.payload.post };
            
        case COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                if (post._id == +action.payload._id) {
                    return action.payload;
                }
                return post;
                }),
            };
        case PUTPOSTS :           
            return { ...state, posts: [...state.posts, action.payload] };

        case UPDATEPOSTS :           
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)}
        case DELETEPOSTS :           
            return {...state, posts: state.posts.filter((post) => post._id != action.payload)  }

        case LIKEPOSTS :           
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)}

        case GET_POSTS_BY_SEARCH:
            return { ...state, posts: action.payload.data }; 

        default:
            return state;
    }
}

export {post_reducer};