import React, { Fragment } from 'react';
import Post_inside_Posts from "./Post/post"
import {makeStyles} from '@material-ui/styles';
import {useSelector} from "react-redux"
import Grid from "@material-ui/core/Grid/Grid"
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"

let Posts_outside_Posts =({setCurrentId}) =>{
 
  const Posts = useSelector((state)=>
    state.post_root_reducer
  )
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
          {/* <h4>Posts_outside_Posts</h4> */}
          {
            Posts.length < 1 ? <CircularProgress />:
            (
              <Grid className = {classes.mainContainer} container alignItems = "stretch" spacing={3} >
                  {
                    Posts.map((post)=>{
                        return(
                          <Grid key={post.id} item xs={12} sm={6}>
                            <Post_inside_Posts post={post} setCurrentId={setCurrentId}/>
                          </Grid>
                        )
                    })
                  }
              </Grid>
            )

          }
        </div>
  )
}
export default Posts_outside_Posts;