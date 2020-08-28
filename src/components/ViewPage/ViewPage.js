import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './ViewPage.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const ViewPage = () => {
   const first15 =fakeData.slice(0,14);
   console.log(first15);
   const[courses,setCourses] = useState(first15);
   const[cart, setCart]= useState([]);

   const handleEnrollCourse =(course)=>{
    console.log("clicked");
    const newCart = [...cart, course];
    setCart(newCart);
   }
    return (
        <div className="page-container">
            <div className="course-container">
                {
                    courses.map(cs=> <Course course={cs} handleEnrollCourse={handleEnrollCourse}></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default ViewPage;