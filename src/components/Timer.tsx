import { useState, useEffect } from 'react';

interface TimerProps {
    task: string;
}

function Timer({ task }: TimerProps) {
    const [secondsLeft, setSecondsLeft] = useState(1500); //25 min
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let interval: number | undefined;

        // countdown if is running and not finished
        if (isRunning && !isFinished) {
            interval = setInterval(() => {
                setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, isFinished]);

    const formatTime = (sec: number) => {
        const min = Math.floor(sec / 60);
        const s = sec % 60;
        return `${min.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h2>{formatTime(secondsLeft)}</h2>
            <p>Task: <strong>{task}</strong></p>
            <button onClick={() => setIsRunning(!isRunning)} disabled={isFinished}>
                {isRunning ? 'Pause' : 'Resume'}
            </button>

            {isFinished && <p>Good job! Your car loves you!</p>}
        </div>
    );
}

export default Timer;