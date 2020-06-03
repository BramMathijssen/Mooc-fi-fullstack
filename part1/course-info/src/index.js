import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts}  />
      <Total part = {course.parts}/>
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
      <Part partNumber={props.parts[0]} />
      <Part partNumber={props.parts[1]} />
      <Part partNumber={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>Course content: {props.partNumber.name}, Amount of exercises {props.partNumber.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total amount of exercises: {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))