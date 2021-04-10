import axios from "axios"
import * as api from "../../api/index.js"
const AUTH = "AUTH";
const LOGOUT = "LOGOUT";



let google_auth_actions = (result, token) => {
    // console.log("result, token", result, token)
    return async (dispatch) => {
        let data = {
            result, token
        }
        try{
            let payload = data
            
            dispatch({type : AUTH, payload:payload})
        }catch(error){

        }
    } 
}

let logout_action = () => {
    // console.log("result, token", result, token)
    return async (dispatch) => {
        
        try{
            
            
            dispatch({type : LOGOUT})
        }catch(error){

        }
    } 
}

let login_action = (formData, history) => {
    // console.log("result, token", result, token)
    return async (dispatch) => {
        
        try{
            
            // let response = await axios.post("http://localhost:5000/users/signin", formData);
            const { data } = await api.login_action(formData);
            // let payload = response.data
            dispatch({type : AUTH, payload:data})
            history.push('/')
        }catch(error){

        }
    } 
}
let signup_action = (formData, history) => {
    // console.log("result, token", result, token)
    return async (dispatch) => {
        
        try{
            
            // let response = await axios.post("http://localhost:5000/users/signup", formData);
            // let payload = response.data
            const { data } = await api.signup_action(formData);
            dispatch({type : AUTH, payload:data})
            history.push('/')
        }catch(error){

        }
    } 
}




export {AUTH, LOGOUT, google_auth_actions, logout_action, login_action, signup_action}