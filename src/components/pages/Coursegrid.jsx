import React from 'react'

import Coursegrid from '../Coursegrid.jsx'
import HeaderRed from '../HeaderRed'
import CoursegridHeader from '../CoursesGridHeader'
import Pagenation from '../Pagenation'

const Course = () => {
  return (
    <div className='pages'>
        <CoursegridHeader/>
        <HeaderRed/>
        <Coursegrid/>   
        <Pagenation/>
    </div>
  )
}
export default Course