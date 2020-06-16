import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>

    )
}

const Part = ({parts}) => {
    return (
      <div>
          <p>{parts.name} {parts.exercises}</p>
      </div>
    )
}

const Content = ({parts}) => {
    const partsMap = parts.map(part => <li key= {part.id}>{part.name} {part.exercises}</li>)
    return (
      <div>
          <ul>
              {partsMap}
          </ul>
      </div>
        
    )
  }

const Course = ({ course }) => {

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>

    )
}

export default Course