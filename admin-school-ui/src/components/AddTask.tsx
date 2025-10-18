import { useState } from "react";
import Input from "./generic/Input";

function AddTask({ onAddTaskClick }: { onAddTaskClick: (title: string, description: string) => void }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="space-y-4 p-6 bg-emerald-400 rounded-md shadow">
            <Input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Input placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={() => {

                // validate if title and description are not empty separated    
                if (title.trim() === '' || description.trim() === '') {
                    alert('Please enter a title and description');
                    return;
                }

                onAddTaskClick(title, description);
                setTitle('');
                setDescription('');
            }}
            >Add Task</button>
        </div>
    );
}

export default AddTask;