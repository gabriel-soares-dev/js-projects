interface Task {
    id: number;  // assuming id is a string, you might need to change this based on your data
    title: string;
    description: string;
    isCompleted: boolean;
}

export default Task;