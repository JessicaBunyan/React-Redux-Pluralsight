import {combineReducers} from 'redux';
import courses from "./courseReducer";

const rootReducer = combineReducers({
    courses // the names we pick here are how we reference this part of the state in code
});

export default rootReducer;