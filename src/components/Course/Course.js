import React from 'react';
import './Course.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
    const{courseName, author, price, courseLink} = props.course;
    return (
        <div className="course">
                <div className="description">
                    <ReactPlayer url={courseLink}/>
                    <h3>{courseName}</h3>
                    <p>Instructor: {author}</p>
                    <h3>Price: ${price}</h3>
                    <button
                     className="btn btn-primary mt-5"
                         onClick={()=>props.handleEnrollCourse(props.course)}>
                         <FontAwesomeIcon icon={faShoppingCart} />
                          Enroll Now
                    </button>
                </div>
        </div>
    );
};

export default Course;