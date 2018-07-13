import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import * as courseActions from "../../actions/courseActions";
import {bindActionCreators} from "redux";
import CourseList from './CourseList';

class CoursesPage extends Component {

  constructor(props, context){
    super(props,context);
  }


  courseRow(course, index){
    return (
      <div key={index}>
        {course.title}
      </div>

    );
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
          <h1>Courses</h1>

          <CourseList courses={courses} />


      </div>
    );
  }

}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){ //state here is the whole state from the redux store, ownProps is this components props
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){ // specify which actions we can use from this component.
  return{
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch) // this line is a library function to do the same as the above, but this will do it for all actions in courseActions
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);


