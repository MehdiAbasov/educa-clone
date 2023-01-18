import React from 'react'
import border from './images/download.png'
import { FaGraduationCap } from 'react-icons/fa'

const HompageReguest = () => {
    return (
        <div className='hompagetwo-welcome'>
            <div className="left-side col-xl-6 col-md-12 col-sm-12">
                <div className="top">
                    <h3>Welcome to Educa</h3>
                    <div className="paragraph">
                        <p>Twee Vice synth stumptown</p>
                        <img src={border} alt="" />
                    </div>
                    <p >Twee Vice synth stumptown, distillery aesthetic slow-carb</p>
                </div>
                <div className="welcome-bottom row">
                    <div className="welcome-item d-flex col-md-6 col-sm-12">
                        <div className="left-side-img">
                            <FaGraduationCap />
                        </div>
                        <div className="right-side-info">
                            <div className="right-top">
                                <p>GRADUATED STEPS</p>
                                <div className="IMG"></div>
                            </div>
                            <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                        </div>
                    </div>
                    <div className="welcome-item d-flex col-md-6 col-sm-12">
                        <div className="left-side-img">
                            <FaGraduationCap />
                        </div>
                        <div className="right-side-info">
                            <div className="right-top">
                                <p>GRADUATED STEPS</p>
                                <div className="IMG"></div>
                            </div>
                            <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                        </div>
                    </div>
                    <div className="welcome-item d-flex col-md-6 col-sm-12">
                        <div className="left-side-img">
                            <FaGraduationCap />
                        </div>
                        <div className="right-side-info">
                            <div className="right-top">
                                <p>GRADUATED STEPS</p>
                                <div className="IMG"></div>
                            </div>
                            <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                        </div>
                    </div>
                    <div className="welcome-item d-flex col-md-6 col-sm-12">
                        <div className="left-side-img">
                            <FaGraduationCap />
                        </div>
                        <div className="right-side-info">
                            <div className="right-top">
                                <p>GRADUATED STEPS</p>
                                <div className="IMG"></div>
                            </div>
                            <p>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-side-registry-input col-xl-4 col-md-12 col-sm-12 ">
                <div className="books-top">
                    <div className="text">
                        <h2>Request Information</h2>
                        <img src={border} alt="" />
                    </div>
                    <p>Twee Vice synth stumptown, distillery aesthetic slow-carb</p>
                </div>

                <form className='registry-inputs'>
                    <div className="select">
                        <div className="input">
                            <input type="text" placeholder='Full Name' />
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Email Adress' />
                        </div>
                    </div>
                    <div className="select">
                        <div className="input">
                            <select id="">
                                <option value="">Campus OfInterests</option>
                                <option value="">Nerby</option>
                                <option value="">High Classes</option>
                                <option value="">short time</option>
                                <option value="">Long Time</option>
                            </select>
                        </div>
                        <div className="input">
                            <select id="">
                                <option value="">Campus OfInterests</option>
                                <option value="">Nerby</option>
                                <option value="">High Classes</option>
                                <option value="">short time</option>
                                <option value="">Long Time</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="button button-request">
                    <button>SUBMIT REQUEST</button>
                </div>
            </div>
        </div>
    )
}

export default HompageReguest