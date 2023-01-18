import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const CoursesGridHeader = () => {
  return (
    <>
      <div className="coursegrid-header">
            <div className="head-text">
                <div className="ht-top">
                  <h2>ALL COURSES</h2>
                  <p>Salvia next level crucifix pickled heirloom synth</p>
                </div>
                <div className="ht-bottom-link">
                  <a href="#">home <MdOutlineKeyboardArrowRight/> </a>
                  <a href="#">Course Categories</a>
                </div>
            </div>
      </div>  
    </>
  )
}

export default CoursesGridHeader