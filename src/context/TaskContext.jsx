import React, { createContext, useContext, useState } from 'react';
import photosData from '../../public/photos.json';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(photosData.photos); // Assuming photosData.photos is an array

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, liked: !task.liked } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => useContext(TaskContext);

export { TaskProvider, useTaskContext };
