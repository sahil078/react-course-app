import React from 'react';
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({course , likedCourses , setLikedCourses}) => {
    // let course = props.course;
    // let likedCourses = props.likedCourses;
    // let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        // logic
        if(likedCourses.includes(course.id)){
            // logic
            setLikedCourses((prev) => prev.filter( (cid)=> (cid !== course.id)));

            // adding toast
            toast.warning("Like Removed");
        }
        else{
            // agr course liked nhi h
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // agr koi course phle se liked h 
                setLikedCourses( (prev)=>[...prev , course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='w-[250px] h-[45vh] bg-gray-600 rounded-md overflow-hidden'>
            <div className='relative' >
                <img className='w-[100%] h-[20vh]' src={course.img} alt=''></img>
                <div className='w-[27px] h-[27px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center '>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)?
                            (<FcLike fontSize="1.5rem"/>):
                            (<FcLikePlaceholder fontSize="1.5rem"/>)
                        }
                    </button>
                </div> 
            </div>
            <div className='p-4'>
                <h5 className='text-white font-semibold text-lg leading-6'>{course.name}</h5>
                <p className="text-white mt-2 text-sm">
                    {
                        course.desc.length>100 ? (course.desc.substr(0,160)) +"..." : (course.desc)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;
