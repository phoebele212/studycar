import { useState } from 'react';
import '../styles/TimerScreen.css';

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
            <div className="task-input-form">
                <div className="task-input-div">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                </div>
                <div className="task-input-div">
                <label>Time</label>
                <input
                    type="number"
                    placeholder="Focus time in minutes"
                    value={time}
                    onChange={(e) => setTime(e.target.value)} />
                </div>
            </div>
            <button type="submit">
                START SESSION
            </button>
        </form>
    )
}

export default TaskInput;