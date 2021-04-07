import React, { useState, useEffect } from 'react';
import {withStyles, createMuiTheme} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/styles';
import Typograpy from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button"
import TextField from "@material-ui/core/TextField/TextField"
import Paper from "@material-ui/core/Paper/Paper"
import FileBase from "react-file-base64"
import {put_Posts_ACTION, update_Posts_ACTION} from "../../redux/action_reducer/post.action"
import {useDispatch, useSelector} from "react-redux"

let Forms =({currentId, setCurrentId}) =>{
	
	const [postData , setpostData] = useState({creator:'', title:'', message:'', tags:'', selectedFile:''})
	const posts = useSelector((state) => currentId ? state.post_root_reducer.find((p) => p._id === currentId) : null) 
	
	useEffect(()=>{
	if(posts)
	{
		setpostData(posts)
	}
  },[posts])
 
  const useStyles = makeStyles({
    root: {
        '& .MuiTextField-root': {
          margin: 8,
        },
      },
      paper: {
        padding: 16,
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: 10,
      },
  });
    const classes = useStyles()
	const dispatch = useDispatch()
	
    const handleSubmit = (e) =>{
		e.preventDefault()
		if(currentId)
		{
			dispatch(update_Posts_ACTION(currentId, postData))
			clear();
		}
		else
		{
			dispatch(put_Posts_ACTION(postData))
			clear();
		}
		
		
    }
	const clear = () =>{
		setCurrentId(null)
		
		postData.selectedFile.base64 = ""
		
		postData.selectedFile.name = ""
		setpostData({creator:'', title:'', message:'', tags:'',selectedFile:""})
	}
  return(
     
      <Paper className = {classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
			<Typograpy variant = "h6" >
				{currentId ? "Editing a memory" : "Creating a memory"}
			</Typograpy>
			<TextField 
				name="Creator"
				variant = "outlined"
				label="Creator"
				fullWidth
				value={postData.creator}
				onChange = {(e)=>setpostData({...postData, creator:e.target.value})}
				/>
			<TextField 
				name="Title"
				variant = "outlined"
				label="Title"
				fullWidth
				value={postData.title}
				onChange = {(e)=>setpostData({...postData, title:e.target.value})}
			/>
			<TextField 
				name="Message"
				variant = "outlined"
				label="Message"
				fullWidth
				value={postData.message}
				onChange = {(e)=>setpostData({...postData, message:e.target.value})}
			/>
			<TextField 
				name="Tags"
				variant = "outlined"
				label="Tags"
				fullWidth
				value={postData.tags}
				onChange = {(e)=>setpostData({...postData, tags:e.target.value.split(',')})}
			/>
			{/* // above split is used in e.target.value in onchange tags */}
			<div className = {classes.fileInput}>
				<FileBase 
					type="file"
					multiple={false}
					onDone={(base64)=>setpostData({...postData, selectedFile:base64})}
				/>

				
			</div>
			<Button className = {classes.buttonSubmit} variant="contained" color="primary" size="large" type= "Submit" fullWidth> Submit </Button>
			<Button variant="contained" color="warning" size="smaill" onClick= {clear} fullWidth> Clear </Button>
		</form>

      </Paper>
  )
}
export default Forms;

