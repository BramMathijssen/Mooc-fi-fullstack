import React from 'react'

const Part = (props) => {
  return (
    <div>
        <p>{props.part.name} {props.exercises}</p>
    </div>
      
  )
}

export default Part