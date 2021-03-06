import axios from "axios"
import * as api from "../../api/index.js"

const GETPOSTS = "GETPOSTS";
const PUTPOSTS = "PUTPOSTS";
const UPDATEPOSTS = "UPDATEPOSTS";
const DELETEPOSTS = "DELETEPOSTS";
const LIKEPOSTS = "LIKEPOSTS";
const GET_POSTS_BY_SEARCH = "GET_POSTS_BY_SEARCH";
const START_LOADING = "START_LOADING"
const END_LOADING = "END_LOADING"
const FETCH_POST = 'FETCH_POST'
const COMMENT = 'COMMENT'
const url = "http://localhost:5000/posts" 

// const fetchposts = () =>axios.get(url)

let commentPost = (value, id) => async (dispatch) => {
    try {
      const { data } = await api.comment(value, id);
  
      dispatch({ type: COMMENT, payload: data });
  
      return data.comments; //for automatic update
    } catch (error) {
      console.log(error);
    }
  };

let getPost = (id) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
  
      const { data } = await api.fetchPost(id);
  
      dispatch({ type: FETCH_POST, payload: { post: data } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };


let getPosts_ACTION = (page) => {
    // console.log("userdata getPosts_ACTION")
    return async (dispatch) => {
        
        try{
            dispatch({ type: START_LOADING });
            const { data: { data, currentPage, numberOfPages } } = await api.getPosts_ACTION(page);
            console.log("getPosts_ACTION", currentPage, numberOfPages)
            
            dispatch({type : GETPOSTS, payload:{ data, currentPage, numberOfPages }})
            dispatch({ type: END_LOADING });
        }catch(error){

        }
    } 
}

let getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        console.log(data)
      dispatch({ type: GET_POSTS_BY_SEARCH, payload: { data } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

let put_Posts_ACTION = (newposts) => {
    console.log("newposts", newposts)
    return async (dispatch) => {
        
        try{
            // console.log("url", url)
            
            const { data } = await api.put_Posts_ACTION(newposts);
            
            
            dispatch({type : PUTPOSTS, payload:data})
        }catch(error){

        }
    } 
}

let update_Posts_ACTION = (id, updateposts) => {
    
    return async (dispatch) => {
        
        try{
            // console.log("url", url)
            // let response = await axios.patch("http://localhost:5000/posts"+ '/' + id, updateposts);
            const { data } = await api.update_Posts_ACTION(id, updateposts);
            // let payload = response.data
            
            dispatch({type : UPDATEPOSTS, payload:data})
        }catch(error){

        }
    } 
}

let Delete_Posts_ACTION = (id) => {
    
    return async (dispatch) => {
        
        try{
            
            //  await axios.delete("http://localhost:5000/posts"+ '/' + id);
             await api.Delete_Posts_ACTION(id);
            
            dispatch({type : DELETEPOSTS, payload:id})
        }catch(error){

        }
    } 
}

let Like_Posts_ACTION = (id) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    return async (dispatch) => {
        
        try{
            
            const { data } = await api.Like_Posts_ACTION(id, user?.token);

           
           
            //  console.log("url", "http://localhost:5000/posts"+ '/' + id + '/' + 'likepost')
            dispatch({type : LIKEPOSTS, payload:data})
        }catch(error){

        }
    } 
}




export {GET_POSTS_BY_SEARCH, GETPOSTS, PUTPOSTS,UPDATEPOSTS,DELETEPOSTS,LIKEPOSTS,START_LOADING, END_LOADING, FETCH_POST, COMMENT, getPost, getPostsBySearch, getPosts_ACTION, put_Posts_ACTION, update_Posts_ACTION, Delete_Posts_ACTION, Like_Posts_ACTION, commentPost}