import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>

    )
}

const Part = ({ parts }) => {
    return (
        <div>
            <p>{parts.name} {parts.exercises}</p>
        </div>
    )
}

const Content = ({ parts }) => {
    //map
    const partsMap = parts.map(part => <li key={part.id}><Part parts={part} /></li>)

    //reduce 
    const totalExercises = parts.reduce(function (sum, parts) {
        return sum + parts.exercises
    }, 0)

    return (
        <div>
            <ul>
                {partsMap}
            </ul>
            <p><b>total exercises: {totalExercises}</b></p>
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