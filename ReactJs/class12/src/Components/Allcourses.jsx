import React from 'react'
import Course from './Course'

const Allcourses = (props) => {
  return (
    <div>
      Allcourses
      <Course courseData={props.courseData} />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  )
}

export default Allcourses