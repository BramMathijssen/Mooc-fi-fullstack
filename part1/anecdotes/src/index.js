import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

const Anecdotes = (props) => {
  return (
    <div>
      <p>{props.anecdotes}</p>
    </div>
  )
}

const DisplayVotes = (props) =>{
  return(
    <div>
      <p>Amount of votes: {props.votes}</p>
    </div>
  )
}

const App = (props) => {
  let randomNumber = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    const points = [... votes];
    points[selected]++;
    setVotes(points)
  }

  return (
    <div>
      <Anecdotes anecdotes = {anecdotes[selected]} />
      <DisplayVotes votes = {votes[selected]} />
      <Button onClick={() => addVote()} text= {"Vote "} />
      <Button onClick={() => nextAnecdote()} text ={"Next Anecdote"} />
      {console.log(selected)}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)