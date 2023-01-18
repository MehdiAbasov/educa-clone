import React from 'react'
import line from './images/download.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import coursedata from '../course.json'
import Courseitem from './Coursedata';



// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";



const Courses = () => {

    return (
        <>

            <div className="course-slider row">
                <div className="slider-top text-center">
                    <div className="s-top">
                        <h4>Popular Courses</h4>
                        <img src={line} alt="" />
                    </div>
                    <p>Twee Vice synth stumptown distillery aesthetic slow carb</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1200: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        }
                    }}
                    scrollbar={false}
                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Autoplay, Navigation, Pagination]}
                >


                    {coursedata.map((item, key) => (
                        <SwiperSlide>
                            <Courseitem key={key} image={item.image} imgnd={item.imgnd} name={item.name} price={item.price} text={item.text} />
                        </SwiperSlide>
                    )
                    )}


                </Swiper>
            </div>

        </>

    )
}

export default Courses