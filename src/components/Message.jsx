import React,{useEffect, useState} from "react"

// import Container from "@material-ui/core/"
import  AppBar from "@material-ui/core/AppBar/AppBar"
import Typograpy from "@material-ui/core/Typography/Typography"
import Grow from "@material-ui/core/Grow/Grow"
import  Grid from "@material-ui/core/Grid/Grid"
import Image from "./images/sample.jpg"
import Forms from "./forms/form"
import Posts_outside_Posts from "./posts/posts"
// import makeStyles from "./styles"
import {makeStyles} from '@material-ui/styles';
import {useDispatch} from "react-redux"
import {getPosts_ACTION} from "../redux/action_reducer/post.action"

let Message =() =>{
    
    const useStyles = makeStyles(theme =>({
        appBar: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
          heading: {
            color: 'rgba(0,183,255, 1)',
          },
          image: {
            marginLeft: '15px',
          },
      }));
      const classes = useStyles()
      const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts_ACTION())
    },[dispatch])
    return(
       
        <div className = "container">
            {/* <h1>Hi this is MESSAGE</h1> */}
            <AppBar className = {classes.appBar} position = "static" color= "primary">
                <Typograpy className = {classes.heading} variant="h2" align="center">Memories</Typograpy>
                <img className = {classes.image} src={Image} alt="memories" height="60" width="60"/>
            </AppBar>
            <Grow in>
            <div className = "container">
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid xs={12} sm={7}>
                        <Posts_outside_Posts />
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Forms />
                    </Grid>

                </Grid>
            </div>
            </Grow>
            </div>
    )
}
export default Message;

 








