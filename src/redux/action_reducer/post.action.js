import axios from "axios"
const GETPOSTS = "GETPOSTS";
const PUTPOSTS = "PUTPOSTS";
const url = "http://localhost:5000/posts"

// const fetchposts = () =>axios.get(url)

let getPosts_ACTION = () => {
    // console.log(userdata)
    return async (dispatch) => {
        
        try{
            let response =await axios.get(url); 
            let payload = response.data
            dispatch({type : GETPOSTS, payload:payload})
        }catch(error){

        }
    } 
}

let put_Posts_ACTION = (newposts) => {
    console.log("newposts", newposts)
    return async (dispatch) => {
        
        try{
            console.log("url", url)
            let response = await axios.post("http://localhost:5000/posts", newposts);
            let payload = response.data
            console.log("payload", response)
            dispatch({type : PUTPOSTS, payload:payload})
        }catch(error){

        }
    } 
}

// export const put_Posts_ACTION = (newposts) => async (dispatch) => {
//     try {
//       const { data } =await axios.post("http://localhost:5000/posts", newposts);
  
//       dispatch({ type: PUTPOSTS, payload: data });
      
    //   axios.post(url, newposts).then(res => {
    //       console.log("scsdcwc",res.data)
    //     dispatch({ type: PUTPOSTS, payload: res.data });
    //   });
    // axios({
    //     method: "POST",
    //     url: "http://localhost:5000/posts",
    //     newposts,
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }).then(res => {
    //     console.log(res.data);
    //   });

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


export {GETPOSTS, getPosts_ACTION, put_Posts_ACTION, PUTPOSTS}