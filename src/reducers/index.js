import {combineReducers} from 'redux';
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
    courses, // the names we pick here are how we reference this part of the state in code
    authors
});

export default rootReducer;