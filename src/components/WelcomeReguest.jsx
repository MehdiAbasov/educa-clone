import line from "./images/download.png"


import { GiGraduateCap } from "react-icons/gi"
import { AiFillAlipaySquare, AiOutlineAccountBook, AiOutlineClockCircle } from "react-icons/ai"
import { FaGlobeAsia, FaGraduationCap } from "react-icons/fa"
import { FaBook } from "react-icons/fa"
import { BsFillPencilFill } from "react-icons/bs"
import { FaCoffee } from "react-icons/fa"


const WelcomeReguest = () => {
    return (
        <>

            <div className="welcome-container">
                <div className="row">
                    <div className="home-welcome-left col-xl-5 col-md-12 col-sm-12">
                        <div className="welcome-images">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="welcome-images-top">
                                        <a href="#">
                                            <img src="https://res.cloudinary.com/veyseloglu/image/upload/v1663404407/news-big-thumb_kwqr5w.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="welcome-images-bottom">
                                        <a href="#">
                                            <img src="https://res.cloudinary.com/veyseloglu/image/upload/v1663404498/news-medium-thumb-1_oqmb04.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <div className="welcome-images-bottom">
                                        <a href="#">
                                            <img src="https://res.cloudinary.com/veyseloglu/image/upload/v1663404487/news-medium-thumb-2_eacm3f.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="home-welcome-right col-xl-7 col-md-12 col-sm-12">
                        <div className="welcome-right-heading">
                            <h4>Welcome to Educa</h4>
                            <img src={line} alt="" />
                            <p>Twee Vice synth stumptown</p>
                        </div>
                        <div className="row">
                            <div className="home-service-item col-md-6 col-sm-12">
                                <div className="home-service-item-left">
                                    <FaGraduationCap className='service-icon' />
                                </div>
                                <div className="home-service-item-right">
                                    <h4>GRADUATING STEPS</h4>
                                    <p>Cre thundercats vean odd future</p>
                                </div>
                            </div>
                            <div className="home-service-item col-md-6 col-sm-12">
                                <div className="home-service-item-left">
                                    <FaGlobeAsia className='service-icon' />
                                </div>
                                <div className="home-service-item-right">
                                    <h4>GLOBAL INTERESTED</h4>
                                    <p>Cre thundercats vean odd future</p>
                                </div>
                            </div>
                            <div className="home-service-item col-md-6 col-sm-12">
                                <div className="home-service-item-left">
                                    <AiOutlineClockCircle className='service-icon' />
                                </div>
                                <div className="home-service-item-right">
                                    <h4>CIRCULAR CLOCK</h4>
                                    <p>Cre thundercats vean odd future</p>
                                </div>
                            </div>
                            <div className="home-service-item col-md-6 col-sm-12">
                                <div className="home-service-item-left">
                                    <FaBook className='service-icon' />
                                </div>
                                <div className="home-service-item-right">
                                    <h4>OPEN BOOK</h4>
                                    <p>Cre thundercats vean odd future</p>
                                </div>
                            </div>
                            <div className="home-service-item col-md-6 col-sm-12">
                                <div className="home-service-item-left">
                                    <BsFillPencilFill className='service-icon' />
                                </div>
                                <div className="home-service-item-right">
                                    <h4>DRAWING LESSONS</h4>
                                    <p>Cre thundercats vean odd future</p>
                                </div>
                            </div>
                            <div className="home-service-item col-md-6 col-sm-12">
                                <div className="home-service-item-left">
                                    <FaCoffee className='service-icon' />
                                </div>
                                <div className="home-service-item-right">
                                    <h4>COFFEE TIME</h4>
                                    <p>Cre thundercats vean odd future</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default WelcomeReguest