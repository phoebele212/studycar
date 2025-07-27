import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import TaskInput from './components/TaskInput'

function App() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  const handleStarted = (taskName: string, timeValue: number) => {
    setTask(taskName);
    setTime(timeValue);
    setStarted(true);
  }
  return (

    <>
      <div>
        <h1> Study Car</h1>
        <p>Choose your own car and start studying!</p>

        {started ? (
          <Timer time={time} task={task} />
        ) : (
          <TaskInput onStart={handleStarted} />
        )}
      </div>
    </>
  )
}

export default App;
