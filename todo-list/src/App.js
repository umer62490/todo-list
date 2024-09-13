import React, { useState } from 'react';
import deleteIcon from './assets/delete.png';
import updateIcon from './assets/loop.png';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => setNewTask(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTask = newTask.trim();
    if (trimmedTask === '') {
      return;
    }

    if (isEditing) {
      // Update the task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = trimmedTask;
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } 
    else {
      // Add new task
      if (tasks.includes(trimmedTask)) {
        alert('Task already exists!');
        return;
      }
      setTasks([...tasks, trimmedTask]);
    }

    setNewTask('');
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  // Delete all tasks
  const handleDeleteAll = () => {
    setTasks([]); // This clears all tasks
  };


  const handleUpdate = (index) => {
    setNewTask(tasks[index]); // Set task in input field
    setIsEditing(true); // Set editing mode to true
    setEditIndex(index); // Track which task is being edited
  };

  return (
    <div className='main-heading'>
      <p>To Do List</p>

      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          <input
            style={{ paddingTop: '1rem',height:'auto' }}
            type='text'
            value={newTask}
            onChange={handleInputChange}
            placeholder='Enter Task'
          />
          <button className="button">
            {isEditing ? 'Update Task' : 'Add Task'} {/* Change button label */}
          </button>
        </div>
      </form>

      <ul  className='task-add'>
        {tasks.map((task, index) => (
          <div className='task-box' key={index}>
            {task}
            <img
              src={updateIcon}
              alt="Update Task"
              onClick={() => handleUpdate(index)}
              className="update-icon"
            />
            <img
              src={deleteIcon}
              alt="Delete Task"
              onClick={() => handleDelete(index)}
              className="delete-icon"
            />
          </div>
        ))}
      </ul>

      <button className=" all-delete" onClick={handleDeleteAll}>Delete All Tasks</button>
    </div>
  );
};

export default App;