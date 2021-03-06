import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import useStyles from './style';
import { getPost, getPostsBySearch } from '../../redux/action_reducer/post.action';

import CommentSection from './CommentSection'

const Post = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const { id } = useParams();

    const { post, posts, isLoading } = useSelector((state) => state.post_root_reducer);

	useEffect(() => {
		if (post) {
		  dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
		}
	  }, [post]);


	useEffect(() => {
		dispatch(getPost(id));
	  }, [id]);

	  const openPost = (_id) => history.push(`/posts/${_id}`);

	  if (isLoading) {
		return (
		  <Paper elevation={6} className={classes.loadingPaper}>
			<CircularProgress size="7em" />
		  </Paper>
		);
	  }

	  if (!post) return null;

	  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (
      <div>
			<Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
				<div className={classes.card}>
					<div className={classes.section}>
						<Typography variant="h3" component="h2">{post.title}</Typography>
						<Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
						<Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
						<Typography variant="h6">Created by: {post.name}</Typography>
						<Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
												
						<Divider style={{ margin: '20px 0' }} />
						<CommentSection post={post} />
					</div>
					<div className={classes.imageSection}>
						<img className={classes.media} src={post.selectedFile.base64 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
					</div>
				</div>
				{!!recommendedPosts.length && (
					<div className={classes.section}>
						<Typography gutterBottom variant="h5">You might also like:</Typography>
						<Divider />
						<div className={classes.recommendedPosts}>
							{recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
							<div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
								<Typography gutterBottom variant="h6">{title}</Typography>
								<Typography gutterBottom variant="subtitle2">{name}</Typography>
								<Typography gutterBottom variant="subtitle2">{message}</Typography>
								<Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
								<img src={selectedFile.base64} width="200px" />
							</div>
							))}
						</div>
					</div>
				)}
			</Paper>
      </div>
    );
  };
  
  export default Post;