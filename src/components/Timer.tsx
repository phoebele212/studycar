import { useState, useEffect } from 'react';

function Timer() {
    const [secondsLeft, setSecondsLeft] = useState(1500); //25 min
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = setInterval(() => {
                setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (sec: number) => {
        const min = Math.floor(sec / 60);
        const s = sec % 60;
        return `${min.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h2>{formatTime(secondsLeft)}</h2>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
        </div>
    );
}

export default Timer;