import React from 'react'
import border from './images/download.png'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
const Footer = () => {
    return (
            <div className='footer'>
                <div className="row">
                    <div className="foot-item col-md-6 col-xl-3 col-sm-12">
                        <img src={border} alt="" />
                        <p>Viral megings photo booth farm tab McSweeney's Thundercats til typewrite PBR food truck Kickstarter mumb ennui Tumblr. Jean shorts hoodiele.</p>
                        <a href="#">READ MORE</a>
                    </div>
                    <div className="foot-item col-md-6  col-xl-3 col-sm-12">
                        <img src={border} alt="" />
                        <div className="nav-a">
                            <div className="link1">
                                <a href="#">Graduation</a>
                                <a href="#">Admissions</a>
                                <a href="#">international</a>
                                <a href="#">FAQs</a>
                            </div>
                            <div className="link1">
                                <a href="#">Graduation</a>
                                <a href="#">Admissions</a>
                                <a href="#">international</a>
                                <a href="#">FAQs</a>
                            </div>
                        </div>
                    </div>
                    <div className="foot-item col-md-6 col-xl-3 col-sm-12">
                        <img src={border} alt="" />
                        <div className="tel">
                            <AiOutlineMail />
                            <p>
                                1107 Wood Street Saginaw, MI New York 48607</p>
                        </div>
                        <div className="tel">
                            <BsTelephoneFill />
                            <p>+12 (34) 214 280 2000</p>
                        </div>
                        <div className="email">
                            <AiOutlineMail />
                            <p>support@educa.com</p>
                        </div>
                    </div>
                    <div className="foot-item col-xl-3 col-md-6 col-sm-12">
                        <img src={border} alt="" />
                        <p>Subsrcibe to our newsletter for latest updates about our site for universe</p>
                        <div className="e-mail">
                            <AiOutlineMail className='aimail' />
                            <input type="text" />
                        </div>
                        <div className="button">
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-left">@ COPYRIGHT 2015 EDUCA. ALL RIGHTS RESERVED</div>
                    <div className="footer-right ">
                        <a href="#">Home</a>
                        <a href="#">courses</a>
                        <a href="#">Future Students</a>
                        <a href="#">News</a>
                        <a href="#">Pages</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
    )
}

export default Footer