import React,{useState} from 'react'
import Button from "@material-ui/core/Button/Button"
import Avatar from "@material-ui/core/Avatar/Avatar"
import Typography from "@material-ui/core/Typography/Typography"
import  Grid from "@material-ui/core/Grid/Grid"
import Paper from "@material-ui/core/Paper/Paper"
import Container from "@material-ui/core/Container/Container"

import useStyles from "./styles"

import  LockOutlined  from '@material-ui/icons/LockOutlined'

import Input from "./Input"

import {GoogleLogin} from "react-google-login"
import Icon from "./Icon"
import {useDispatch} from "react-redux"
import {google_auth_actions, signup_action, login_action} from "../../redux/action_reducer/auth.action"
import {useHistory} from "react-router-dom"

const initialState = {firstname:'', secondname:'', email:'', password:'', confirmpassword : ''}

const Auth = () => {
    const state = null;
    const classes = useStyles()
    const [isSignUp, setisSignUp] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const usedispatch = useDispatch()
    const history = useHistory()
    const [formData, setformData] = useState(initialState)

    const handlesubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        if(isSignUp)
        {
            usedispatch(signup_action(formData, history))
        }
        else{
            usedispatch(login_action(formData, history))
        }
    }   
    const handlechange = (e) =>{
        // console.log(e.target.name)
        setformData({...formData,[e.target.name]:e.target.value})
    }
    const handleShowPassword = () => {setshowPassword((prevsetshowPassword)=> !prevsetshowPassword)}

    const switchmode = () => {
        setisSignUp((prevsetisSignUp)=> !prevsetisSignUp)
        setshowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId;

        try{
            usedispatch(google_auth_actions(result, token))
            history.push('/')
        }
        catch(error){
            console.log(error)
        }
    }
    // (?.) used above for stopping unddefined error
  
    const googleFailure = () => {
        console.log("Failure")
    }

    return (
       
            <Container component="main">
                
                    <Paper className={classes.paper} elevation={3}>
                        <Avatar className={classes.avatar}>
                            <LockOutlined />
                        </Avatar>
                        <Typography variant ="h5">
                            {
                                isSignUp ? 
                                
                                'Sign Up'
                                :
                                'Sign In'
                            }
                            
                        </Typography>
                        <form className={classes.form} onSubmit={handlesubmit}>
                            <Grid container spacing={2}>
                                {isSignUp &&
                                (
                                    <>
                                        
                                        <Input name="firstname" label="First Name" handlechange={handlechange} autoFocus half />
                                        <Input name="secondname" label="Second Name" handlechange={handlechange} half />
                                        
                                    </>
                                )
                                
                                    
                            }
                                <Input name="email" label="Email" handlechange={handlechange} type={"email"}/>
                                <Input name="password" label="Password" handlechange={handlechange} type={showPassword ? 'text' : "password"} handleShowPassword ={handleShowPassword}/>
                                {isSignUp &&  <Input name="confirmpassword" label="Confirm Password" handlechange={handlechange} type= "password"/>}
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" color="inherit" className={classes.submit}>
                            {
                                isSignUp ? 
                                
                                'Sign Up'
                                :
                                'Sign In'
                            }
                            </Button>
                            <GoogleLogin
                                clientId = "773622518351-2a62pebccf8oa7ck2fi1ic8vkuq7tcn7.apps.googleusercontent.com"
                                render={(renderprops) => (
                                    <Button 
                                        className={classes.googleButton} 
                                        color="primary" 
                                        fullWidth 
                                        onClick={renderprops.onClick} 
                                        disabled={renderprops.disabled} 
                                        startIcon ={<Icon />} 
                                        variant="contained">
                                    Google Sign In
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure = {googleFailure}
                                cookiePolicy = "single_host_origin"
                            />
                            
                            <Grid container justify="flex-end">
                                <Grid>
                                    <Button onClick={switchmode}>
                                    {
                                isSignUp ? 
                                
                                'Already have an account? Sign In'
                                :
                                "Don't have an account? Sign Up"
                            } 
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                
            </Container>
        
    )
}

export default Auth
