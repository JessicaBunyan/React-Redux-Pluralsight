 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 import { connect } from 'react-redux'
import { bindActionCreators } from '../../../node_modules/redux';
import * as courseActions from "../../actions/courseActions";
import CourseForm from './CourseForm';

 export class ManageCoursePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course})
    }

    saveCourse(event) {
        event.preventDefault();
        console.log("in save course");
        console.log(this.state.course);
        this.props.actions.saveCourse(this.state.course);
    }

    render() {
     return (
        <CourseForm
            onChange={this.updateCourseState}
            onSave={this.saveCourse}
            allAuthors={this.props.authors}
            course={this.state.course}
            errors={this.state.errors}
        />
     )
   }


 }

 ManageCoursePage.propTypes =  {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    let course = {id: "", wartchHref: "", title: "", authorId: "", length: "", category: ""}

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });

    return{
        course: course,
        authors: authorsFormattedForDropdown
     };
}

 function mapDispatchToProps (dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
