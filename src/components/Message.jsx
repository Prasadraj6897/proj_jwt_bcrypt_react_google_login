import React,{useEffect, useState} from "react"

import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import Forms from "./forms/form"
import Posts_outside_Posts from "./posts/posts"
// import makeStyles from "./styles"
import {makeStyles} from '@material-ui/styles';
import {useDispatch} from "react-redux"
import {getPosts_ACTION, getPostsBySearch} from "../redux/action_reducer/post.action"
import Navbar from "./Navbar/Navbar"
import Paginate from "./Pagination/pagination"

import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import useStyles from './MessageStyle';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

let Message =() =>{
		const classes = useStyles();
		const query = useQuery();
		const history = useHistory();
		const page = query.get('page') || 1;
		const searchQuery = query.get('searchQuery');
		const [search, setSearch] = useState('');
		const [tags, setTags] = useState([]);
		
	
    	const [currentId, setCurrentId] = useState(null)
   
      
      const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts_ACTION())
    },[currentId, dispatch])

	const handleKeyPress = (e) => {
		if (e.keyCode === 13)  {//ie enter key
		  searchPost();
		}
	  };
	
	  const handleAddChip = (tag) => setTags([...tags, tag]);
	
	  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

	  const searchPost = () => {
		if (search.trim() || tags) {
		  dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
		  history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
		} else {
		  history.push('/');
		}
	  };

    return(
       
        <div className = "container">
            {/* <h1>Hi this is MESSAGE</h1> */}
            {/* <Navbar /> */}
            <Grow in>
				<Container maxWidth="xl">
					<Grid container  justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
						<Grid xs={12} sm={7} md={9}>
							<Posts_outside_Posts setCurrentId={setCurrentId}/>
						</Grid>
						
						<Grid xs={12}  sm={6} md={3}>
							<AppBar className={classes.appBarSearch} position="static" color="inherit">
								<TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
								<ChipInput
									style={{ margin: '10px 0' }}
									value={tags}
									onAdd={(chip) => handleAddChip(chip)}
									onDelete={(chip) => handleDeleteChip(chip)}
									label="Search Tags"
									variant="outlined"
								/>
								<Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
							</AppBar>

							<Forms currentId={currentId} setCurrentId={setCurrentId}/>
							<Paper className={classes.pagination} elevation={6}>
							<Paginate  />
							</Paper>
						</Grid>
						
					</Grid>
				</Container>
            </Grow>
		</div>
    )
}
export default Message;

 








