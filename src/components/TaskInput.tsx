import { useState } from 'react';

interface TaskInputProps {
    onStart: (task: string, time: number) => void;
}

function TaskInput({ onStart }: TaskInputProps) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (task.trim() && time.trim()) {
            onStart(task.trim(), Number(time));
            setTask('');
            setTime('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)} />

            <input
                type="number"
                placeholder="Focus time in minutes"
                value={time}
                onChange={(e) => setTime(e.target.value)} />

            <button type="submit">
                Start Session
            </button>
        </form>
    )
}

export default TaskInput;