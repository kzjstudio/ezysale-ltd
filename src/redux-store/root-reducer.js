import { combineReducers } from "redux";
import {userReducer} from "../redux-store/user/user.reducer"

export const rootReducer = combineReducers({
user: userReducer
})