import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  useEffect(() => {

    const fetchTasks = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`, 
        {
        method: 'GET'
        }
      );
      const data = await response.json();
      setTasks(data);
    }
    fetchTasks();
  }, []);


  function onDeleteTaskClick(id: number) {
    const newTasks = tasks.filter((task: { id: number; }) => task.id !== id);
    setTasks(newTasks);
  }

  function onTaskClick(id: number) {
    const newTasks = tasks.map((task: { id: number; isCompleted: any; }) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onAddTaskClick(title: string, description: string) {
    const newTask = { id: tasks.length + 1, title, description, isCompleted: false };
    console.log(newTask.id);
    setTasks([...tasks, newTask]);
  }

  return <>
    <div className="w-[500px] space-y-4">
      <h1 className="text-center text-gray-500 text-3xl font-bold my-4">Tasks Manager</h1>
      <AddTask onAddTaskClick={onAddTaskClick}/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
    </div>
  </>;
}

export default App;