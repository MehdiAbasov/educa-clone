import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="category-head">
            <h4>Categories</h4>
        </div>
        <div className="category-list">
            <ul>
                <li><IoIosArrowForward/>Design</li>
                <li><IoIosArrowForward/>International</li>
                <li><IoIosArrowForward/>Learning</li>
                <li><IoIosArrowForward/>Read</li>
                <li><IoIosArrowForward/>Eduacation</li>
                <li><IoIosArrowForward/>Finance</li>
            </ul>
        </div>
    </div>
  )
}

export default Categories