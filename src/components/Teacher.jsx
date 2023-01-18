import React from 'react'
import Teacherinfo from '../Teacher.json'
import TeacherItem from './TeacherItem'
import Pagenation from './Pagenation'
const Teacher = () => {
    return (
        <><div className="teacher-container">
            <div className="row">
                {Teacherinfo.map((item , key) => (
                    <TeacherItem image={item.image} name={item.name} text={item.about} job={item.job} />
                )
                )}
            </div>
        </div>
            <Pagenation />
        </>
    )
}

export default Teacher