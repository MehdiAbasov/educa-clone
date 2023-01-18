import React from 'react'

import sliderimg from './images/qoca-slider.png'
import carouselimg from './images/carousel1.jpg'

const AboutUsSlider = () => {
    return (
        <div className='aboutus-carousel'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="carousel-item-img">
                            <div className="carousel-head">
                                <img src={sliderimg} class="d-flex" alt="..." />
                                <p>CARLOSS M. DAVIS </p>
                                <span>Web designer</span>
                            </div>
                            <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="carousel-item-img">
                            <div className="carousel-head">
                                <img src={sliderimg} class="d-flex" alt="..." />
                                <p>CARLOSS M. DAVIS </p>
                                <span>Web designer</span>
                            </div>
                            <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default AboutUsSlider