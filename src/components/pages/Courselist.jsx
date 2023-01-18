import React from 'react'
import HeaderRed from '../HeaderRed'
import CoursesGridHeader from '../CoursesGridHeader'
import Courselistitem from '../Courselistitem'


const Courselist = () => {
    return (
        <div className='page'>
            <CoursesGridHeader />
            <HeaderRed />
            <Courselistitem/>
        </div>
    )
}

export default Courselist