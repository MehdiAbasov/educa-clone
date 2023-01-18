import React, { forwardRef, useRef } from 'react'
import logo from './images/logo.png'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { FaCross } from 'react-icons/fa'
import CurtainNavbarAccordion from './CurtainNavbarAccordion'

const Navbar = () => {
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

    const clicknav = forwardRef()
    const showSide = useRef()

    function curtainNavbar(e) {
        const click = e.target

        if (click.classList.contains('burger-icon')) {
            showSide.current.classList.toggle('openside') 
        }
    }


    return (

        <>

            <div className="accordion-left-side" ref={showSide} onClick={curtainNavbar}>
                <CurtainNavbarAccordion />
            </div>

            <div className="Navbar">
                <div className="overlay" ref={overlayRef}>
                    <div className="closeIcon" >
                        <AiOutlineCloseCircle forwardRef={clsRef} onClick={closeSearch} className='closeicon' />
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder='TYPE KEYWORD(S) HERE' />
                    </div>
                    <button ref={closeBtn} onClick={closeSearch}>SEARCH</button>
                </div>
                <div className="logo">
                  <Link to="/" ><img src={logo} alt="" /></Link>
                </div>
                <div className="nav-links">
                    <div className="top">
                        <div className="tel">
                            <BsTelephoneFill />
                            <a href="#">+49 233 322 333</a>
                        </div>
                        <div className="email">
                            <AiOutlineMail />
                            <a href="#">your@website.com</a>
                        </div>
                        <div className="languages">
                            <BiWorld />
                            <select name="" id="" >
                                <option value="">English</option>
                                <option value="">Dutch</option>
                                <option value="">Albanian</option>
                            </select>
                        </div>
                        <button>Apply now</button>
                    </div>
                    <div className="bottom">
                        <div class="dropdown">
                            <button class="dropbtn">HOME<MdOutlineKeyboardArrowDown /></button>
                            <div class="dropdown-content">
                                <Link to='/'>Homepage1</Link>
                                <Link to='/homepage2' >Homepage2</Link>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">COURSES <MdOutlineKeyboardArrowDown /></button>
                            <div class="dropdown-content">
                                <Link to='/Course'>COURSES GRIDS</Link>
                                <Link to='/courselist'>COURSES LISTS</Link>
                                <Link to='/singlecourse'>SINGLE COURSE</Link>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">EVENTS <MdOutlineKeyboardArrowDown /></button>
                            <div class="dropdown-content">
                                <Link to="/events">CLASSIC EVENTS</Link>
                                <a href="#">CALENDAR EVENTS</a>
                                <a href="#">SINGLE EVENTS</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">PAGES <MdOutlineKeyboardArrowDown /></button>
                            <div class="dropdown-content">
                                <Link to='/aboutus'>ABOUT US</Link>
                                <Link to='/ourteacher'>OUR TEACHER</Link>
                                <a href="#">SINGLE TEACHER</a>
                                <a href="#">GALLERY 4 COLUMNS</a>
                                <a href="#">GALLERY 3 COLUMNS</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">NEWS <MdOutlineKeyboardArrowDown /></button>
                            <div class="dropdown-content">
                                <a href="#">CLASSIC NEWS</a>
                                <a href="#">GRID NEWS</a>
                                <a href="#">SINGLE POST</a>
                            </div>
                        </div>
                        <a className='a' href="">CONTACT</a>
                        <a className='a' onClick={openSearch} ref={openIcon} href="#"><AiOutlineSearch className='openicon' /></a>
                    </div>
                </div>
                <div className="burger">
                    <FaBars className='burger-icon' forwardRef={clicknav} onClick={curtainNavbar} />
                </div>
            </div>
        </>
    )
}

export default Navbar