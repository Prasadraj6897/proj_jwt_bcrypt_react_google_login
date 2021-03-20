import axios from "axios";

const PUTUSERDATA = "PUTUSERDATA";
const GETUSERDATA = "GETUSERDATA";
const USER_API_BASE_URL = "http://localhost:5000/users";
const LOGIN_API_BASE_URL = "http://localhost:5000/login";

let signup_action = (userdata, history) => {
    // console.log(userdata)
    return async (dispatch) => {
        
        try{
            dispatch({type : PUTUSERDATA})
            let format = {
                headers: {
                    type : "application/json"
                }
            }
            await axios.post(USER_API_BASE_URL, userdata); 
            history.push("/")
        }catch(error){

        }
    } 
}

let login_action = (logindata) => {
    
    return async (dispatch) => {
        
        try{
            // console.log("logindata", logindata)
           let response =  await axios.put(LOGIN_API_BASE_URL, logindata); 
        //    console.log("response.data",response.data)
            let payload = response.data
            dispatch({type : GETUSERDATA, payload:payload})
        }catch(error){

        }
    } 
}

export {PUTUSERDATA, GETUSERDATA, signup_action, login_action}