import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action){
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses; // API returns the new state
        case types.CREATE_COURSES_SUCCESS:
            return [
                ...state, //"spread" operator, here its making a copy of all the values in state in our new array
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSES_SUCCESS:
            console.log("UPDATE COURSE SUCCESS");
            return [
                ...state.filter(course => course.id !== action.course.id), // all the courses that aren't the updated one
                Object.assign({}, action.course) // shallow copy of the updated course
            ];
        default:
            return state;
    }
}

