import { useState } from 'react'
import borderbottom from './images/download.png'

import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import teacher1 from './images/teacher1.jpg'
import teacher2 from './images/teacher2.jpg'
import teacher3 from './images/teacher3.jpg'
import teacher4 from './images/teacher4.jpg'
const Ourteacher = () => {

    return (
        <div className="teachers">
            <div className="row">
                <div className="teacher-top">
                    <div className="text-course">
                        <h2>OUR TEACHER</h2>
                        <img src={borderbottom} alt="" />
                    </div>
                    <p>High Life squid literally scenester fap Helvetica quinoa church-key</p>
                </div>
            </div>
            <div className="row">
                <div className='col-md-6 col-xl-3  col-sm-6'>
                    <div className="teacher-item">
                        <div className="teacher-top-content">
                            <div className="teacher-image-holder">
                                <Link to="#">
                                    <img src={teacher1} alt="" />
                                </Link>
                                <div className="teacher-hover-content">
                                    <Link to="#"><AiFillInstagram /></Link>
                                    <Link to="#"><BsFacebook /></Link>
                                    <Link to="#"><BsGithub /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-down-content">
                            <a href="#">NICK SMITH</a>
                            <span>Progrmmer, teacher</span>
                            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-xl-3 col-sm-6'>
                    <div className="teacher-item">
                        <div className="teacher-top-content">
                            <div className="teacher-image-holder">
                                <Link to="#">
                                    <img src={teacher2} alt="" />
                                </Link>
                                <div className="teacher-hover-content">
                                    <Link to="#"><AiFillInstagram /></Link>
                                    <Link to="#"><BsFacebook /></Link>
                                    <Link to="#"><BsGithub /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-down-content">
                            <a href="#">NICK SMITH</a>
                            <span>Progrmmer, teacher</span>
                            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-xl-3 col-sm-6'>
                    <div className="teacher-item">
                        <div className="teacher-top-content">
                            <div className="teacher-image-holder">
                                <Link to="#">
                                    <img src={teacher3} alt="" />
                                </Link>
                                <div className="teacher-hover-content">
                                    <Link to="#"><AiFillInstagram /></Link>
                                    <Link to="#"><BsFacebook /></Link>
                                    <Link to="#"><BsGithub /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-down-content">
                            <a href="#">NICK SMITH</a>
                            <span>Progrmmer, teacher</span>
                            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-xl-3  col-sm-6'>
                    <div className="teacher-item">
                        <div className="teacher-top-content">
                            <div className="teacher-image-holder">
                                <Link to="#">
                                    <img src={teacher4} alt="" />
                                </Link>
                                <div className="teacher-hover-content">
                                    <Link to="#"><AiFillInstagram /></Link>
                                    <Link to="#"><BsFacebook /></Link>
                                    <Link to="#"><BsGithub /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-down-content">
                            <a href="#">NICK SMITH</a>
                            <span>Progrmmer, teacher</span>
                            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourteacher