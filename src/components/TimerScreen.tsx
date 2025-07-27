import TaskInput from './TaskInput';
import Timer from './Timer';
import { useState } from 'react';
import type { Screen } from '../App';

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
        <div>
            {started ? (
                <Timer time={time} task={task} />
            ) : (
                <TaskInput onStart={handleStarted} />
            )}

            <button onClick={() => setScreen('menu')}>Back to Menu</button>

        </div>
    );
}

export default TimerScreen;