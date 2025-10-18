import { ChevronRightIcon, TrashIcon } from "lucide-react";
import Task from "../model/ITask";
import { useNavigate } from "react-router-dom";
import Button from "./generic/Button";



function Tasks(props: { tasks: Task[]; onTaskClick: (id: number) => void; onDeleteTaskClick: (id: number) => void }) {
    const navigate = useNavigate();
    
    function onSeeDetailsClick(task: Task) {
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`); // Navigate to /task with query parameters
    }

    return (
        <div className="max-w-2xl mx-auto p-4 bg-blue-400 rounded shadow">
            {props.tasks.map((task) => (
                <div key={task.id} className="bg-white shadow-md rounded p-4 mb-4 flex items-center gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} 
                        className={`bg-slate-400 text-left w-full text-white p-2 
                            rounded-md ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                    </button>
                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => props.onDeleteTaskClick(task.id)}>
                        <TrashIcon />
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default Tasks;