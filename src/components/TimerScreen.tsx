import TaskInput from './TaskInput';
import Timer from './Timer';
import { useState } from 'react';
import type { Screen } from '../App';
import '../styles/TimerScreen.css';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
function TimerScreen({ setScreen }: Props) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState(0);
    const [started, setStarted] = useState(false);

    const handleStarted = (taskName: string, timeValue: number) => {
        setTask(taskName);
        setTime(timeValue);
        setStarted(true);
    }
    return (
        <div className="timer-screen">
            {started ? (
                <Timer time={time} task={task} />
            ) : (
                <TaskInput onStart={handleStarted} />
            )}
            <button className="back-to-menu-button" onClick={() => setScreen('menu')}>BACK TO MENU</button>

        </div>
    );
}

export default TimerScreen;