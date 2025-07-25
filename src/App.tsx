import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <div>
        <h1> Study Car</h1>
        <p>Choose your own car and start studying!</p>
        <Timer />
      </div>
    </>
  )
}

export default App;
