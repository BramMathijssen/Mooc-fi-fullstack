import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
]
  
    //test commit
    return (
      <div>
          <p>{course}</p>


          {/* <p>{part1.name} amount of exercises:  {part1.exercises}</p>
          <p>{part2.name} amount of exercises:  {part2.exercises}</p>
          <p>{part3.name} amount of exercises:  {part3.exercises}</p> */}
      </div>
    )
  }



// Exercise Part 1a
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
        <Header course={course} />
        <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
        <Total total = {total} />
    </div>
  )
}

const Header = (props) => {

    return(
        <div>
            <p>Welcome to {props.course}</p>
        </div>
    )
}

const Content = (props) => {

    return(
        <div>
            <p>The following parts will be reviewed in this course: </p>
            <ul>
                <li>{props.part1}, Amount of exercises: {props.exercises1}</li>
                <li>{props.part2}, Amount of exercises: {props.exercises2}</li>
                <li>{props.part3}, Amount of exercises: {props.exercises3}</li>
            </ul>
        </div>
    )
}

const Total = (props) => {

    return(
        <div>
            <p>The total amount of exerices in this course is {props.total}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))