import React from 'react'

import { FaList } from 'react-icons/fa'
import { FaThLarge } from 'react-icons/fa'
const HeaderRed = () => {
  return (
    <div className='course-header-red'>
      <div className="row flex-direction-between">
        <div className="header-red-right-side col-xl-6 col-sm-12">
          <p>SHOWING 1-9 OF 40 COURSES</p>
        </div>
        <div className="header-red-left-side col-xl-6 col-sm-12">
          <select>
            <option value="#">select category</option>
            <option value="#">free</option>
            <option value="#">timing</option>
          </select>
          <select>
            <option value="#">shorted by</option>
            <option value="#">free</option>
            <option value="#">timing</option>
          </select>
          <div className="header-red-list">
            <FaList />
          </div>
          <div className="header-red-list">
            <FaThLarge />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderRed