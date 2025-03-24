import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/tasks', { ...newTask, completed: false });
        setTasks([...tasks, res.data]);
        setNewTask({ title: '', description: '' });
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={newTask.title} 
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
                    className="border p-2 mr-2"
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={newTask.description} 
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} 
                    className="border p-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task._id} className="bg-white p-4 mb-2 flex justify-between">
                        <div>
                            <h2 className="font-bold">{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                        <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white p-2">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
