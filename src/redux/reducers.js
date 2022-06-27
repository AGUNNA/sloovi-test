import { combineReducers } from "redux";
import taskReducer from './tasksSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
    tasks: taskReducer,
    user: userReducer
})
export default rootReducer