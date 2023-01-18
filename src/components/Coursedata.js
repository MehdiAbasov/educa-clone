import React from 'react'


import { AiOutlineArrowRight } from 'react-icons/ai';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import { Link, Output } from 'react-router-dom'



const Coursedata = ({ text, image, price, imgnd, name, }) => {
    return (
        <>

            <div className='courses-item'>
                <div className="swiper-slider">
                    <div className="item course-item" >
                        <a href="#">
                            <img className='image' src={image} alt="" />
                        </a>
                        <div className="down-content">
                            <img className='swiper-teacher-img' src={imgnd} alt="" />
                            <h4 className='name'>{name}</h4>
                            <div className="courses-price">
                                <span className='price'>{price}</span>
                                <div className="base"></div>
                            </div>
                            <a className='course-text' href="#"><h3 >{text}</h3></a>
                            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                            <a href="#" className='courses-link'>Viev more <AiOutlineArrowRight /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Coursedata