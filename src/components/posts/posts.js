import React, { Fragment } from 'react';
import Post_inside_Posts from "./Post/post"
import {makeStyles} from '@material-ui/styles';
import {useSelector} from "react-redux"

let Posts_outside_Posts =() =>{
  const Posts = useSelector((state)=>{
    console.log("state.post_root_reducer.Post_Data",state.post_root_reducer)
  })
  const useStyles = makeStyles({
    
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      smMargin: {
        margin:8,
      },
      actionDiv: {
        textAlign: 'center',
      },
  });
    const classes = useStyles()
  return(
     
      <div className = "container">
          <h4>Posts_outside_Posts</h4>
          </div>
  )
}
export default Posts_outside_Posts;