import React,{useEffect, useState} from "react"

// import Container from "@material-ui/core/"

import Grow from "@material-ui/core/Grow/Grow"
import  Grid from "@material-ui/core/Grid/Grid"
import Forms from "./forms/form"
import Posts_outside_Posts from "./posts/posts"
// import makeStyles from "./styles"
import {makeStyles} from '@material-ui/styles';
import {useDispatch} from "react-redux"
import {getPosts_ACTION} from "../redux/action_reducer/post.action"
import Navbar from "./Navbar/Navbar"

let Message =() =>{
    const [currentId, setCurrentId] = useState(null)
    const useStyles = makeStyles((theme) =>({
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
        //   for only mobile(Error of using down)
        // [theme.breakpoints.down('md')]:{
        //     mainContainer:{
        //         flexDirection:"column-reverse"
        //       }
        // }
          
      }));
      const classes = useStyles()
      const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts_ACTION())
    },[currentId, dispatch])
    return(
       
        <div className = "container">
            {/* <h1>Hi this is MESSAGE</h1> */}
            {/* <Navbar /> */}
            <Grow in>
            <div className = "container">
                <Grid container  justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid xs={12} sm={7}>
                        <Posts_outside_Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Forms currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>

                </Grid>
            </div>
            </Grow>
            </div>
    )
}
export default Message;

 








