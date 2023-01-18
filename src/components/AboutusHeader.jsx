import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const AboutusHeader = () => {
    return (
        <div className="aboutus-header">
            <div className="head-text">
                <div className="ht-top">
                    <h2>About Us</h2>
                    <p>Salvia next level crucifix pickled heirloom synth</p>
                </div>
                <div className="ht-bottom-link">
                    <a href="#">Home <MdOutlineKeyboardArrowRight /> </a>
                    <a href="#">Pages <MdOutlineKeyboardArrowRight/></a>
                    <a href="#">About Us</a>
                </div>
            </div>
        </div>
    )
}

export default AboutusHeader