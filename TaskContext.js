// TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: false },
  ]);

  const addTask = (task) => {
    const taskExists = tasks.some((t) => t.title.toLowerCase() === task.title.toLowerCase());
    if (!taskExists) {
      setTasks([...tasks, task]);
    }
    return !taskExists;
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  );
};
