import React, { useState } from 'react';
import Card from './Card';



const Cards = ({ CourseData, category }) => {
    let allCourses = [];

    // function for liked or unliked courses
    const [likedCourses, setLikedCourses] = useState([]);

    // return all the list of course
    const getCourse = () => {

        if (category === 'All') {
            Object.values(CourseData).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            // specific category
            return CourseData[category];
        }
    }


    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourse().map((course) => {
                    return <Card key={course.id} course={course}
                        likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    );

}

export default Cards;
