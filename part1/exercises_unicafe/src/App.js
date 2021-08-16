import React, { useState } from 'react'

const Button = ({label, handleClick}) =>
  <button onClick = {handleClick}>{label}</button>

const StatisticLine = ({text, value}) => (
  <tr>
    <td><strong>{text}:</strong>&nbsp;</td>
    <td>{value}</td>
  </tr>
)

const FeedbackCollector = ({state:[good, neutral, bad], stateHandlers:[setGood, setNeutral, setBad]}) => {
  const giveGoodFeedback = () => setGood(good + 1)
  const giveNeutralFeedback = () => setNeutral(neutral + 1)
  const giveBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <p>How was your experience at Unicafe?</p>
      <Button label = 'Good 😊' handleClick = {giveGoodFeedback} />&nbsp;
      <Button label = 'Neutral 😐' handleClick = {giveNeutralFeedback} />&nbsp;
      <Button label = 'Bad 😞' handleClick = {giveBadFeedback} />
    </div>
  )
}

const Statistics = ({state:[good, neutral, bad]}) => {
  let total = good + neutral + bad
  let mean = ((good * 1) + (bad * -1))/total
  let percentagePositive = good/total * 100

  if (total) {
    return (
      <div>
        <h1>Statistics</h1>
          <h2>Feedback</h2>
          <table>
            <tbody>
              <StatisticLine text = {'Good'} value = {good + ' ' + '😞'.repeat(good)} />
              <StatisticLine text = {'Neutral'} value = {neutral + ' ' + '😞'.repeat(neutral)} />
              <StatisticLine text = {'Bad'} value = {bad + ' ' + '😞'.repeat(bad)} />
            </tbody>
          </table>
  
          <h2>Summary</h2>
          <table>
            <tbody>
              <StatisticLine text = 'Total' value = {total} />
              <StatisticLine text = 'Mean' value = {mean ? mean : '0'} />
              <StatisticLine text = 'Positive' value = {percentagePositive ? percentagePositive + '%' : '0'} />
            </tbody>
          </table>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

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