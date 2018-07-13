import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";

export function createCourse(course){
    return { type: types.CREATE_COURSE, course} // all actions must have a type property, course is our data
}

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => { // this would be an ajax call here
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}

