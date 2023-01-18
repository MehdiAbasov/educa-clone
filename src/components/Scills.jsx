import React from 'react'
import line from './images/download.png'

import CountUp from 'react-countup'
const Scills = () => {
    return (
        <>
            <div className="our-scills">
                <div className="row">
                    <div className="col-md-12">
                        <div className="followers">
                            <div className="follower">
                                <span><CountUp end={1256} /> </span>
                                <img src={line} alt="" />
                                <p>Great Costumer</p>
                                {/* hover olacaq */}
                            </div>
                            <div className="follower">
                                <span><CountUp end={5400}/></span>
                                <img src={line} alt="" />
                                <p>Happy Client</p>
                                {/* hover olacaq */}
                            </div>
                            <div className="follower">
                                <span><CountUp end={2450}/></span>
                                <img src={line} alt="" />
                                <p>completed Projects</p>
                                {/* hover olacaq */}
                            </div>
                            <div className="follower">
                                <span><CountUp end={18}/></span>
                                <img src={line} alt="" />
                                <p>Year Of Experience</p>
                                {/* hover olacaq */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="aboutus-head text-center">
                        <h3>Our Scills</h3>
                        <img src={line} alt="" />
                        <p>Twee Vice synth stumptown distillery aesthetic slow carb</p>
                    </div>
                </div>
                <div className="row second-row">
                    <div className="col-md-6">
                        <div className="scills first">
                            <h4>Javascript</h4>
                            <span>78%</span>
                            <div className="bg-fff"></div>
                            <div className="bg-yellow"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="scills second">
                            <h4>Web Design</h4>
                            <span>92%</span>
                            <div className="bg-fff"></div>
                            <div className="bg-yellow"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="scills third">
                            <h4>Photoshop</h4>
                            <span>85%</span>
                            <div className="bg-fff"></div>
                            <div className="bg-yellow"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="scills fourth">
                            <h4>İllustrator</h4>
                            <span>70%</span>
                            <div className="bg-fff"></div>
                            <div className="bg-yellow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scills