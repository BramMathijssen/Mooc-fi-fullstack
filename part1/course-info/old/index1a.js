import React from 'react'
import ReactDOM from 'react-dom'

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
      <Content  part1={part1} part2={part2} part3={part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Total total={total} />
    </div>
  )
}

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    
    <div>
      <Part content={props.part1} exercises={props.exercises1} />
      <Part content={props.part2} exercises={props.exercises2} />
      <Part content={props.part3} exercises={props.exercises3} />
      {/* <p>Course content: {props.content}, Amount of exercises {props.exercises}</p> */}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>Course content: {props.content}, Amount of exercises {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total amount of exercises: {props.total}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))