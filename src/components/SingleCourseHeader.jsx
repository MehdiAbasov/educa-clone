import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const SingleCourseHeader = () => {
    return (
        <>
            <div className="coursegrid-header">
                <div className="head-text">
                    <div className="ht-top">
                        <h2>Single Course</h2>
                        <p>Salvia next level crucifix pickled heirloom synth</p>
                    </div>
                    <div className="ht-bottom-link">
                        <a href="#">home <MdOutlineKeyboardArrowRight /> </a>
                        <a href="#">Single Course</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCourseHeader