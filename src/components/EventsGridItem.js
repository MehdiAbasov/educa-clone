import { MdLocationPin } from "react-icons/md"
import { BsClock } from "react-icons/bs"
import { Link } from 'react-router-dom'
const EventsGridItem = ({ image, title, adress, date, text }) => {
    return (
        <div className='col-md-6 col-xl-4'>
            <div className='event-details'>
                <img src={image} className='w-100' />
                <div className="event-down-content">
                    <div className="down-content-top">
                        <div className="left-side-down">
                            <span><MdLocationPin /></span>
                            <p>{adress}</p>
                        </div>
                        <div className="right-side-down">
                            <span><BsClock /></span>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="down-content-bottom">
                        <div className="top">
                            <div>18 <br/> dec</div>
                            <Link to='/'>
                                <h4>{title}</h4>
                            </Link>
                        </div>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsGridItem