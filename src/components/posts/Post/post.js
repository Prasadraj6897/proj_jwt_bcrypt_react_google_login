import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Typograpy from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button" 
import Card from "@material-ui/core/Card/Card"
import CardActions from "@material-ui/core/CardActions/CardActions"
import CardContent from "@material-ui/core/CardContent/CardContent"
import CardMedia from "@material-ui/core/CardMedia/CardMedia"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; 
import moment from "moment"
import {useDispatch, useSelector} from "react-redux"
import {Delete_Posts_ACTION,Like_Posts_ACTION} from "../../../redux/action_reducer/post.action"
import { ButtonBase } from '@material-ui/core/';
import useStyles from './style';
import { useHistory } from 'react-router-dom';


let Post_inside_Posts = (props) =>{
		const dispatch = useDispatch()
		const history = useHistory()
   
      const classes = useStyles()
      const user = JSON.parse(localStorage.getItem('profile'))
      
      const Likes = () => {
        if (props.post.likes.length > 0) {
          return props.post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{props.post.likes.length > 2 ? `You and ${props.post.likes.length - 1} others` : `${props.post.likes.length} like${props.post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{props.post.likes.length} {props.post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/posts/${props.post._id}`);
  };
    
    return(
      <div>
        {/* <h4>Posts inside</h4> */}
        	{/* <pre>{JSON.stringify(props.post)}</pre> */}
			<Card className = {classes.card} raised elevation={6}>

			<ButtonBase
			component="span"
			name="test"
			className={classes.cardAction}
			onClick={openPost}
			>

				<CardMedia className = {classes.media} image={props.post.selectedFile.base64 || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cameraegg.org%2Fsony-rx1-sample-images%2F&psig=AOvVaw0cHsUArg0HM1M8MJCTVUwE&ust=1618151777330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDF06Pz8-8CFQAAAAAdAAAAABAD'}  title = {props.post.title}/>
				<div className = {classes.overlay}>
                    <Typograpy variant ="h6">
                        {props.post.name}
                    </Typograpy>
                    <Typograpy variant ="body2">
                        {/* 5 min ago like that */}
                        {moment(props.post.createdAt).fromNow()} 
                    </Typograpy>
				</div>
				{(user?.result?.googleId === props.post?.creator || user?.result?._id === props.post?.creator) && (
						<div className = {classes.overlay2}>
							<Button style={{color:"white"}} size="small" onClick={()=>{props.setCurrentId(props.post._id)}}>
								<MoreHorizIcon fontSize="default" />
							</Button>
						</div>
				)}

				<div className = {classes.details}>
					<Typograpy variant ="body2" color="textSecondary">
						{props.post.tags.map((tag)=>`#${tag} `)}
					</Typograpy>
                </div>
                <Typograpy variant ="h5" className = {classes.title} gutterBottom>
                    {props.post.title}
                </Typograpy>
                <CardContent>
                    <Typograpy variant ="body2" color="textSecondary" component="p">
                        {props.post.message}
                    </Typograpy>
                </CardContent>
			</ButtonBase>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color='primary' disabled={!user?.result} onClick={()=>dispatch(Like_Posts_ACTION(props.post._id))}>
                        <Likes />
                    </Button>
                    {(user?.result?.googleId === props.post?.creator || user?.result?._id === props.post?.creator) && (
                      <Button size="small" color='secondary' onClick={()=>dispatch(Delete_Posts_ACTION(props.post._id))}>
                          <DeleteIcon fontSize="small"/>
                              Delete
                      </Button>
                      )}

                </CardActions>	
			</Card>
        </div>
    )
}

export default Post_inside_Posts;