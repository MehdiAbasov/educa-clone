import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Coursegrid = ({ image, imgnd, text, name, price }) => {
    return (<>

        <div className="card col-md-4 courses-card">
            <img src={image} alt="..." />
            <div className="down-content card-border">
                <img className='swiper-teacher-img' src={imgnd} alt="" />
                <p className='name'>{name}</p>
                <div className="course-price">
                    <div className='price price-grid'>{price}</div>
                    <div className="base-grid"></div>
                </div>
                <Link className="course-text"><h3>{text}</h3></Link>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className='courses-link'>Viev more <AiOutlineArrowRight /> </a>
            </div>
        </div>

    </>
    )
}

export default Coursegrid