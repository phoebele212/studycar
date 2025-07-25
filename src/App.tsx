import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import TaskInput from './components/TaskInput'

function App() {
  const [currentTask, setCurrentTask] = useState<string | null>(null);
  return (
    <>
      <div>
        <h1> Study Car</h1>
        <p>Choose your own car and start studying!</p>

        {!currentTask ? (
          <TaskInput onStart={setCurrentTask} />
        ) : (
          <Timer task={currentTask} />
        )}
      </div>
    </>
  )
}

export default App;
