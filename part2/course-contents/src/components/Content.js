import React from 'react'
import Part from './Part'

const Content = ({course}) => {
  return (
    <div>
        <ul>
            <li><Part part={course.part[0]}/> </li>
            <li><Part part={course.part[1]}/> </li>
            <li><Part part={course.part[2]}/> </li>
        </ul>
    </div>
      
  )
}

export default Content