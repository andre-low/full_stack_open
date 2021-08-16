import React, { useState } from 'react'

const Button = ({label, handleClick}) =>
  <button onClick = {handleClick}>{label}</button>

const FeedbackCollector = ({state:[good, neutral, bad], stateHandlers:[setGood, setNeutral, setBad]}) => {
  const giveGoodFeedback = () => setGood(good + 1)
  const giveNeutralFeedback = () => setNeutral(neutral + 1)
  const giveBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <p>How was your experience at Unicafe?</p>
      <Button label = 'Good 😊' handleClick = {giveGoodFeedback} /> 
      <Button label = 'Neutral 😐' handleClick = {giveNeutralFeedback} /> 
      <Button label = 'Bad 😞' handleClick = {giveBadFeedback} />
    </div>
  )
}

const Statistics = ({state:[good, neutral, bad]}) => (
  <div>
    <h1>Statistics</h1>
    Good: {good}<br />
    Neutral: {neutral}<br />
    Bad: {bad}<br />
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <FeedbackCollector state = {[good, neutral, bad]} stateHandlers = {[setGood, setNeutral, setBad]}/>
      <Statistics state = {[good, neutral, bad]}/>
    </>
  )
}

export default App