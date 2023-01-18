import React from 'react'
import Border from './images/download.png'

import { Swiper, SwiperSlide } from "swiper/react";
import teacherimg from './images/AnvarKhalid.jpg'

import news1 from './images/news1.jpg'
import news2 from './images/news2.jpg'
// Import Swiper styles
import "swiper/css";


const News = () => {
    return (
        <div className='testimonials'>
            <div className="row">
                <div className="news-left col-xl-6 col-md-12 col-sm-12">
                    <div className="news-header">
                        <h3>What Our Students Say
                        </h3>
                        <div className="news-header-img">
                            <img src={Border} alt="" />
                        </div>
                    </div>
                    <div className="news-carousel">
                        <Swiper className="mySwiper">
                            <SwiperSlide>
                                <div className="students-comment">
                                    <div className="students-comments">
                                        <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
                                    </div>
                                    <div className="student-info">
                                        <div className="student-img">
                                            <img src={teacherimg} alt="" />
                                        </div>
                                        <div className="studen-name">
                                            <h5>Anvar Khalid</h5>
                                            <p>Mern stack deveoper</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="students-comment">
                                    <div className="students-comments">
                                        <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
                                    </div>
                                    <div className="student-info">
                                        <div className="student-img">
                                            <img src={teacherimg} alt="" />
                                        </div>
                                        <div className="studen-name">
                                            <h5>Anvar Khalid</h5>
                                            <p>Mern stack deveoper</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="news-right col-xl-6 col-md-12 col-sm-12">
                    <div className="news-header">
                        <h3>University News
                        </h3>
                        <div className="news-header-img">
                            <img src={Border} alt="" />
                        </div>
                    </div>
                    <div className="news-section">
                        <div className="news-img-link">
                            <a href="#"><img src={news1} alt="" /></a>
                        </div>
                        <div className="news-comments">
                            <div className='news-date'>
                                <span>7 oct 2015</span>
                                <span>by admin</span>
                                <span>two comments</span>
                            </div>
                            <p>NEW UNIVERSITY FINDER: COMPARE</p>
                            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic.</p>
                        </div>
                    </div>
                    <div className="news-section">
                        <div className="news-img-link">
                            <a href="#"><img src={news2} alt="" /></a>
                        </div>
                        <div className="news-comments">
                            <div className='news-date'>
                                <span>7 oct 2015</span>
                                <span>by admin</span>
                                <span>two comments</span>
                            </div>
                            <p>NEW UNIVERSITY FINDER: COMPARE</p>
                            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News