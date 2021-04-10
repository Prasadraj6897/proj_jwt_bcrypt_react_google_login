
import {user_reducer} from "./action_reducer/reducer"
import {post_reducer} from "./action_reducer/post.reducer"
import {auth_reducer} from "./action_reducer/auth.reducer"

import { combineReducers } from 'redux';


let RootReducers = combineReducers(
                                    {
                                        User_root_reducer : user_reducer,
                                        post_root_reducer : post_reducer,
                                        auth_root_reducer : auth_reducer
                                       
                                    }
                                    
                                )

export {RootReducers};