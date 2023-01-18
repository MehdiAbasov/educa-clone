import React from 'react'
import borderbottom from './images/download.png'
import { AiOutlineAreaChart } from 'react-icons/ai'

const Homepagebook = () => {
    return (
        <div className='home-books'>
            <div className="books-top">
                <div className=" text-home">
                    <h2>You Can Read Books</h2>
                    <img src={borderbottom} alt="" />
                </div>
                <p>Plaid you probably haven't heard of them fashion axe meditation</p>
            </div>
            <div className="books-middle row">
                <div className='col-md-6 col-xl-3 col-sm-12'>
                    <div className="books-item-home books-item">
                        <AiOutlineAreaChart className='book-icon ' />
                        <p>Structure <br /> Entry Requirements</p>
                    </div>
                </div>
                <div className='col-md-6 col-xl-3 col-sm-12'>
                    <div className="books-item-home books-item">
                        <AiOutlineAreaChart className='book-icon ' />
                        <p>Structure <br /> Entry Requirements</p>
                    </div>
                </div>
                <div className='col-md-6 col-xl-3 col-sm-12'>
                    <div className="books-item books-item-home">
                        <AiOutlineAreaChart className='book-icon ' />
                        <p>Structure <br /> Entry Requirements</p>
                    </div>
                </div>
                <div className='col-md-6 col-xl-3 col-sm-12'>
                    <div className="books-item books-item-home">
                        <AiOutlineAreaChart className='book-icon ' />
                        <p>Structure <br /> Entry Requirements</p>
                    </div>
                </div>
            </div>
            <div className="books-home-button">
                <button>GO TO THE BOOKS</button>
            </div>
        </div>
    )
}

export default Homepagebook