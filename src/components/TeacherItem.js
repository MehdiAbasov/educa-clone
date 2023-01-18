import React from 'react'
import { Link } from 'react-router-dom'

import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const TeacherItem = ({ image, text, name, job }) => {
    return (

        <div className='col-md-4 col-xl-3  col-sm-6'>
            <div className="teacher-item">
                <div className="teacher-top-content">
                    <div className="teacher-image-holder">
                        <Link to="#">
                            <img src={image} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="teacher-down-content">
                    <a href="#">{name}</a>
                    <span>{job}</span>
                    <p>{text}</p>
                    <div className="teachers-social-platforms">
                        <Link to="#"><AiFillInstagram /></Link>
                        <Link to="#"><BsFacebook /></Link>
                        <Link to="#"><BsGithub /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherItem