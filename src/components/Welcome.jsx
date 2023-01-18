
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import border from './images/download.png'
import { FaGraduationCap } from 'react-icons/fa'

const Welcome = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o4fqqfq', 'template_yts5ajy', form.current, 'XdGw_KZCJfxbKSAqO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



    return (
        <div className="Welcome">
            <div className="row">
                <div className="left-side col-xl-8 col-md-12 col-sm-12">
                    <div className="top">
                        <h3>Welcome to Educa</h3>
                        <div className="paragraph">
                            <p>Twee Vice synth stumptown</p>
                            <img src={border} alt="" />
                        </div>
                        <p className='p2'>Twee Vice synth stumptown, distillery aesthetic slow-carb Intelligentsia bitters taxidermy <br />
                            McSweeney's, flexitarian actually iPhone mlkshk brunch.</p>
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
                <div className="right-side col-xl-4 col-md-12 col-sm-12 ">
                    <div className="head">
                        <h2>Request Information</h2>
                    </div>
                    <form ref={form} onClick={sendEmail} className='registry-inputs'>
                        <div className="input">
                            <input type="text" name='subject' placeholder='Full Name'  />
                        </div>
                        <div className="input">
                            <input type="email" name='email' placeholder='Email Adress' />
                        </div>
                        <div className="input">
                            <select>
                                <option value="1">Campus OfInterests</option>
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
                    </form>
                    <div className="button">
                        <input type='submit' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome