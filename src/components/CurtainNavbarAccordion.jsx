import React from 'react'

import { Link } from 'react-router-dom'
import { useRef, forwardRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const CurtainNavbarAccordion = () => {

    const openIcon = useRef()
    const overlayRef = useRef()

    function openSearch(e) {
        const kliklenenElement = e.target

        if (kliklenenElement.classList.contains('openicon')) {
            overlayRef.current.classList.add('active')
        }
    }

    const clsRef = forwardRef()
    const closeBtn = useRef()

    function closeSearch(e) {
        const kliklenenElement = e.target

        if (kliklenenElement.current === clsRef.current || kliklenenElement.current === closeBtn.current) {
            overlayRef.current.classList.remove('active')
        }
    }

    return (
        <div className='container-accordion'>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span>Home</span>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body flex-direction-column">
                            <Link to='/'>HomePage1</Link>
                            <Link to='/homepage2'>HomePage2</Link>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span>Courses</span>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <Link to='/Course'>COURSES GRIDS</Link>
                            <Link to='/courselist'>COURSES LISTS</Link>
                            <Link to='/singlecourse'>SINGLE COURSE</Link>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span>Events</span>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <Link to="/events">CLASSIC EVENTS</Link>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <span>Pages</span>
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <Link to="/aboutus">About us</Link>
                            <Link to="/ourteacher">Our teacher</Link>
                        </div>
                    </div>
                </div>
                <div className="overlay" ref={overlayRef}>
                    <div className="closeIcon" >
                        <AiOutlineCloseCircle forwardRef={clsRef} onClick={closeSearch} className='closeicon' />
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder='TYPE KEYWORD(S) HERE' />
                    </div>
                    <button ref={closeBtn} onClick={closeSearch}>SEARCH</button>
                </div>
                <div className="curtain-search">
                    <a className='a' onClick={openSearch} ref={openIcon} href="#"><AiOutlineSearch className='openicon' /></a>
                </div>
            </div>
        </div>
    )
}

export default CurtainNavbarAccordion