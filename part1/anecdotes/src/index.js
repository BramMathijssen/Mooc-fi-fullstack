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
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes}</p>
      <DisplayVotes votes = {props.votes} />
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

const DisplayMostVotedAnecdote = ({votes, anecdotes}) => {
  //1. Find the highest vote in the votes list
  const highestVote = Math.max(...votes);

  //2. Find the position in the list of this highest vote
  const highestVoteLocation = votes.indexOf(highestVote)
  
  //3. Use the same position in the anecdotes list
  const anecdoteMostVotes = anecdotes[highestVoteLocation];

  //4. Display the anecdote from the position in the list
  return(
    <div>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdoteMostVotes}</p>
      <p>Amount of votes:{highestVote}</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    const points = [...votes];
    points[selected]++;
    setVotes(points)
  }


  return (
    <div>
      <Anecdotes anecdotes = {anecdotes[selected]} votes = {votes[selected]} />
      <DisplayMostVotedAnecdote votes = {votes} anecdotes = {anecdotes} />
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