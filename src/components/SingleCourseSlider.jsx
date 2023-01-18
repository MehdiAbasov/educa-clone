

import slide from './images/slidebg-1.jpg'
import slide2 from './images/slidebg-2.jpg'

import teacherimg from './images/teacher1.jpg'

const SingleCourseSlider = () => {

    return (
        <>
            <div className="single-course-slider">
                <div className="single-course-head">
                    <h4>How to become a Powerful Speaker ?</h4>
                    <p>Plaid you probably haven't heard of them fashion axe meditation</p>
                    <div className="single-course-position">
                        <img src={teacherimg} alt="s" className='single-course-teacher-img' />
                        <span>Ernest Byrd</span>
                    </div>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                            <img src={slide} alt="" className='w-100' />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                            <img src={slide2} alt="" className='w-100' />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                            <img src={slide} alt="" className='w-100' />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                            <img src={slide} alt="" className='w-100' />
                        </button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slide} class=" w-100" alt="sslide" />
                        </div>
                        <div class="carousel-item">
                            <img src={slide2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slide} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCourseSlider