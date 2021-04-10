import React from 'react'
import TextField from "@material-ui/core/TextField/TextField"
import  Grid from "@material-ui/core/Grid/Grid"
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import IconButton from "@material-ui/core/IconButton/IconButton"
import  Visibility from '@material-ui/icons/Visibility'
import  VisibilityOff  from '@material-ui/icons/VisibilityOff'


const Input = ({half, name, label, autoFocus, type, handlechange, handleShowPassword}) => {
    return (
        <Grid item xs={12} sm={half ? 6: 12}>
            <TextField  
                name={name}
                onChange={handlechange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={
                    name === 'password' ?
                    {
                        endAdornment:(
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                    :
                    null
                    
                }
            />
        </Grid>
    )
}

export default Input;
