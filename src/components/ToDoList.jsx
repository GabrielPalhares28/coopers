import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Develop the To-do list page', done: false },
    { id: 2, text: 'Create the drag-and-drop function', done: false },
    { id: 3, text: 'Add new tasks', done: false },
    { id: 4, text: 'Delete items', done: false },
    { id: 5, text: 'Erase all', done: false },
    { id: 6, text: 'Checked item goes to Done list', done: false },
    { id: 7, text: 'This item label may be edited', done: false },
    { id: 8, text: 'Get FTP credentials', done: true },
    { id: 9, text: 'Home Page Design', done: true },
    { id: 10, text: 'E-mail John about the deadline', done: true },
    { id: 11, text: 'Create a Google Drive folder', done: true },
    { id: 12, text: 'Send a gift to the client', done: true },
  ]);

  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const handleTaskToggle = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, done: !task.done }; 
      }
      return task;
    }));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleDeleteAll = (listType) => {
    setTasks(tasks.filter(task => task.done !== (listType === "done")));
  };

  const handleEditTask = (taskId, taskText) => {
    setEditingTaskId(taskId);
    setEditingText(taskText);
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map(task => {
      if (task.id === editingTaskId) {
        return { ...task, text: editingText }; 
      }
      return task;
    }));
    setEditingTaskId(null);
    setEditingText("");
  };

  return (
    <div className="home-container">
      {/* To-do Column */}
      <div className="task-column todo-column">
        <h4>To-do</h4>
        <p>Take a breath. Start doing.</p>
        <ul className="task-list">
          {tasks.filter(task => !task.done).map((task) => (
            <li key={task.id} className="task">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleTaskToggle(task.id)}
                aria-label={`Mark ${task.text} as done`}
              />
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={handleSaveEdit} 
                  autoFocus
                />
              ) : (
                <label onClick={() => handleEditTask(task.id, task.text)}>{task.text}</label>
              )}
              <button
                className="delete"
                onClick={() => handleDeleteTask(task.id)}
                aria-label={`Delete ${task.text}`}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        <button
          className="erase-button"
          onClick={() => handleDeleteAll("toDo")}
          aria-label="Erase all tasks in To-do"
        >
          erase all
        </button>
      </div>

      {/* Done Column */}
      <div className="task-column done-column">
        <h4>Done</h4>
        <p>Congratulations! You have done {tasks.filter(task => task.done).length} tasks</p>
        <ul className="task-list">
          {tasks.filter(task => task.done).map((task) => (
            <li key={task.id} className="task">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleTaskToggle(task.id)}
                aria-label={`Mark ${task.text} as to-do`}
              />
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={handleSaveEdit}
                  autoFocus
                />
              ) : (
                <label onClick={() => handleEditTask(task.id, task.text)}>{task.text}</label>
              )}
              <button
                className="delete"
                onClick={() => handleDeleteTask(task.id)}
                aria-label={`Delete ${task.text}`}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        <button
          className="erase-button"
          onClick={() => handleDeleteAll("done")}
          aria-label="Erase all tasks in Done"
        >
          erase all
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
