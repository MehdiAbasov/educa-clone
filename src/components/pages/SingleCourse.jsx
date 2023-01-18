import React from 'react'

import SingleCourseSlider from '../SingleCourseSlider'
import SingleCourseHeader from '../SingleCourseHeader'
import Categories from '../Categories'
import CourseInformation from '../CourseInformation'
import Description from '../Description'
import Topics from '../Topics'
import Accordion from '../Accordion'
const SingleCourse = () => {
    return (

        <>
            <SingleCourseHeader />
            <div className='single-course'>
                <div className='row'>
                    <div className='col-md-12 col-xl-8'>
                        <SingleCourseSlider />
                        <Description/>
                        <Topics/>
                        {/* <Accordion/> */}
                    </div>
                    <div className='col-xl-4 '>
                        <CourseInformation />
                        <Categories />
                    </div>
                </div>
            </div>
        </>

    )
}

export default SingleCourse