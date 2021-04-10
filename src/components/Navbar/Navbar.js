import React,{useState, useEffect} from "react"
import  AppBar from "@material-ui/core/AppBar/AppBar"
import Typograpy from "@material-ui/core/Typography/Typography"
import useStyles from "./styles"
import Image from "../images/sample.jpg"
import { Link, useHistory, useLocation } from "react-router-dom"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Button from "@material-ui/core/Button/Button"
import Avatar from "@material-ui/core/Avatar/Avatar"
import {useDispatch} from "react-redux"
import {logout_action} from "../../redux/action_reducer/auth.action"
import decode from "jwt-decode"


const Navbar = () =>{

    const classes = useStyles()
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation();

    useEffect (()=>{
        const token = user?.token

        if(token)
        {
            const decodeToken = decode(token)
            if(decodeToken.exp * 1000 < new Date().getTime())
            {
                logout()
            }
        }

        setuser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    const logout = () => {
        dispatch(logout_action())
        setuser(null)
        history.push('/')

    }
    return (
            <AppBar className = {classes.appBar} position = "static" color= "primary">
                <div className={classes.brandContainer}>
                    <Typograpy component={Link} to="/" className = {classes.heading} variant="h2" align="center">Memories</Typograpy>
                    <img className = {classes.image} src={Image} alt="memories" height="60" width="60"/>
                </div>
                <Toolbar className = {classes.toolbar}>
                    {
                        user ?
                        (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user.result.name} src = {user.result.imageUrl}>
                                    {user.result.name.charAt(0)}
                                </Avatar>
                                <Typograpy className={classes.userName} variant="h6"> 
                                    {user.result.name}
                                </Typograpy>
                                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
                                    logout
                                </Button> 
                            </div>

                        )
                        :
                        (
                            <div>
                                <Button component={Link} to="/auth" variant="contained" color="default">
                                    Signin
                                </Button>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>
           
    )

}

export default Navbar;