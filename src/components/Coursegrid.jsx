import React from 'react'
import Coursegriditem from './Coursegriditem'
import coursedata from '../course.json'

const Coursegrid = () => {
    return (
        <div className='container-course-grid'>
            <div className="row">
                {coursedata.map((item, key) => (
                    <Coursegriditem  key={key} imgnd={item.imgnd}  image={item.image} name={item.name} price={item.price}  text={item.text} />
                )
                )}
            </div>
        </div>
    )
}

export default Coursegrid