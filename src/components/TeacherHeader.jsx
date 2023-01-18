import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const TeacherHeader = () => {
    return (
        <>
            <div className="Teacher-header">
                <div className="head-text">
                    <div className="ht-top">
                        <h2>Our Teacher</h2>
                        <p>Salvia next level crucifix pickled heirloom synth</p>
                    </div>
                    <div className="ht-bottom-link">
                        <a href="#">Home <MdOutlineKeyboardArrowRight /> </a>
                        <a href="#">Pages <MdOutlineKeyboardArrowRight /></a>
                        <a href="#">Our Teacher</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherHeader