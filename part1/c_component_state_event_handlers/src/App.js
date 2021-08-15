import React, { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({label, onClickFunction}) => <button onClick = {onClickFunction}>{label}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementCounter = () => setCounter(counter + 1)
  const decrementCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <>
      <Display counter = {counter} />
      <Button label = 'Increment' onClickFunction = {incrementCounter} />
      <Button label = 'Decrement' onClickFunction = {decrementCounter} />
      <Button label = 'Reset' onClickFunction = {resetCounter} />
    </>
  )
}

export default App