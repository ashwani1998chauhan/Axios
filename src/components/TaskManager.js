import React, { useState } from 'react';

const TaskManager = () => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt('Enter a new task:');
    if (newTask) {
      setPendingTasks([...pendingTasks, newTask]);
    }
  };

  const finishTask = () => {
    if (pendingTasks.length === 0) {
      alert('No pending tasks to finish!');
      return;
    }

    const lastTask = pendingTasks[pendingTasks.length - 1];
    setCompletedTasks([...completedTasks, lastTask]);
    setPendingTasks(pendingTasks.slice(0, -1));
  };

  return (
    <div>
      <div>
        <h2>Pending Tasks</h2>
        <ul>
          {pendingTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button onClick={addTask}>Add Task</button>
        <button onClick={finishTask}>Finish Task</button>
      </div>
      <div>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
