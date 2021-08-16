import React, { useState } from 'react'

const Button = ({label, handleClick}) =>
  <button onClick = {handleClick}>{label}</button>

const App = () => {
  // Store anecdotes
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  // Set state
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))

  // Click handler functions
  const randomSelected = () => setSelected(Math.floor(Math.random() * 7))
  const upvoteAnecdote = () => {
    const votesNew = [...votes]
    votesNew[selected] += 1
    setVotes(votesNew)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <p style={{height: '2em'}}>
          {anecdotes[selected]}
        </p>
        <Button label = 'Show me an anecdote 📜' handleClick = {randomSelected} />&nbsp;
        <Button label = 'Sweet anecdote, have an upvote ⬆️' handleClick = {upvoteAnecdote} />
      <h1>Most popular anecdote</h1>
        <p>The most popular anecdote with <strong>{Math.max(...votes)}</strong> votes is:</p>
        <p>
          {[...votes].reduce((accumulator, currentValue) => accumulator + currentValue) ? anecdotes[votes.indexOf(Math.max(...votes))] : ''}
        </p>
    </div>
  )
}

export default App