
import {user_reducer} from "./action_reducer/reducer"

import { combineReducers } from 'redux';


let RootReducers = combineReducers(
                                    {
                                        User_root_reducer : user_reducer
                                       
                                    }
                                    
                                )

export {RootReducers};