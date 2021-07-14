import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from './styles';

import {getPosts_ACTION} from "../../redux/action_reducer/post.action"
const Paginate = ({ page }) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const { numberOfPages } = useSelector((state) => state.post_root_reducer);
    useEffect(()=>{
        if (page) {
            dispatch(getPosts_ACTION(page))
        }
    },[page, dispatch])

    return(
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
              )}
        />
    )
}

export default Paginate;