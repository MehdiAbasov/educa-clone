import React from 'react'

import newsheaderimg from './images/newsheader.jpg'
import newsbottomimg from './images/newsheaderbottom.jpg'

const Homepageheader = () => {
    return (
        <>

            <div className="left-side-images col-md-6 col-sm-12">
                <div className="row d-block">
                    <div className="top-side-img col-md-6">
                        <img  src={newsheaderimg} alt="" />
                    </div>
                    <div className="row col-md-6 col-xs-6">
                        <div className=" col-md-6">
                            <img src={newsbottomimg} alt="" />
                        </div>
                        <div className=" col-xs-6 col-md-6">
                            <img  src={newsbottomimg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-side-header col-md-6 col-sm-12">
                    s
                </div>
            </div>
        </>
    )
}

export default Homepageheader