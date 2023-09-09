import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {

  const clickMe = () => {
    alert('Clicked on clickMe');
  }

  const clickMe2 = (num) => {
    alert(`Total sum is ${num + 5}`)
  }

  return (
    <>
      <h1>React</h1>
      <Users></Users>

      <Counter></Counter>

      <button onClick={clickMe}>Click Me</button>
      <button onClick={() => alert('Clicked on clickMe1')}>Click Me 1</button>
      <button onClick={() => clickMe2(5)}>Click Me 2</button>
    </>
  )
}

export default App

