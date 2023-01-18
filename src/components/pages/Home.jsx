import React from 'react'
import Carousel from '../Carousel'
import Welcome from '../Welcome'
import Courses from '../Courses'
import Books from '../Books'
import Testimonials from '../Testimonials'
import Ourteacher from '../Ourteacher'

const Home = () => {
    return (
        <div className='pages'>
            <div className='page'>
                <Carousel/>
                <Welcome/>
                <Courses/>
                <Testimonials/>
                <Books/>
                <Ourteacher/>
            </div>
        </div>
    )
}

export default Home