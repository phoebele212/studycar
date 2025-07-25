import { useState } from 'react';

interface TaskInputProps {
    onStart: (task: string) => void;
}

function TaskInput({ onStart }: TaskInputProps) {
    const [task, setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            onStart(task.trim());
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)} />

            <button type="submit">
                Start Session
            </button>
        </form>
    )
}

export default TaskInput;