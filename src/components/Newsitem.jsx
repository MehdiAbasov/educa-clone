import React from 'react'
import { Link } from 'react-router-dom'
import newsimg from './images/newsimg.jpg'
import { FaExpandAlt } from 'react-icons/fa'


const Eventsitem = () => {
    return (
        <div className="university-news">
            <div className="row">
                <div className="col-md-6">
                    <div className="news-item">
                        <div className="image-holder">
                            <Link to="#" ><img src={newsimg} alt="" /></Link>
                            <div className="hover-content">
                                <Link to=''><FaExpandAlt /></Link>
                            </div>
                        </div>
                        <div className="right-content">
                            <ul>
                                <li className='first-child-li'>7 Oct 2015</li>
                                <li className='second-child-li'>3 Comments</li>
                            </ul>
                            <Link to="#">
                                <h4>New University: Compare</h4>
                            </Link>
                            <div className="line-dec"></div>
                            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Ander.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="news-item">
                        <div className="image-holder">
                            <Link to="#" ><img src={newsimg} alt="" /></Link>
                            <div className="hover-content">
                                <Link to='' ><FaExpandAlt /></Link>
                            </div>
                        </div>
                        <div className="right-content">
                            <ul>
                                <li className='first-child-li'>7 Oct 2015</li>
                                <li className='second-child-li'>3 Comments</li>
                            </ul>
                            <Link to="#">
                                <h4>New University: Compare</h4>
                            </Link>
                            <div className="line-dec"></div>
                            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Ander.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="news-item">
                        <div className="image-holder">
                            <Link to="#" ><img src={newsimg} alt="" /></Link>
                            <div className="hover-content">
                                <Link to='' ><FaExpandAlt /></Link>
                            </div>
                        </div>
                        <div className="right-content">
                            <ul>
                                <li className='first-child-li'>7 Oct 2015</li>
                                <li className='second-child-li'>3 Comments</li>
                            </ul>
                            <Link to="#">
                                <h4>New University: Compare</h4>
                            </Link>
                            <div className="line-dec"></div>
                            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Ander.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="news-item">
                        <div className="image-holder">
                            <Link to="#" ><img src={newsimg} alt="" /></Link>
                            <div className="hover-content">
                                <Link to='' ><FaExpandAlt /></Link>
                            </div>
                        </div>
                        <div className="right-content">
                            <ul>
                                <li className='first-child-li'>7 Oct 2015</li>
                                <li className='second-child-li'>3 Comments</li>
                            </ul>
                            <Link to="#">
                                <h4>New University: Compare</h4>
                            </Link>
                            <div className="line-dec"></div>
                            <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Ander.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventsitem