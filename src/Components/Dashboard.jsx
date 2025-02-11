import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import Navbar from "./Navbar";

const Dashboard = () => {
  const { user } = useUser();
  const userId = user?.id || "guest";
  const storageKey = `tasks_${userId}`;

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(storageKey)) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
    if (tasks.length >= 3) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [tasks]);

  const handleAddOrUpdateTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      text: task,
      timestamp: new Date().toLocaleString(),
    };

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  return (
    <div className="h-screen bg-gray-300">
      <Navbar />

      {showAlert && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg text-lg font-semibold">
          ⚠️ Attention! You have 3 or more tasks. Stay focused!
        </div>
      )}

      <div className="flex flex-col items-center justify-center mt-4 space-y-6 w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow-lg">
          Welcome, <span className="text-blue-600">{user?.firstName}!</span>
        </h2>

        <div className="flex items-center bg-white p-5 rounded-lg shadow-lg w-[500px] transition duration-300 transform hover:scale-105">
          <img
            src="https://img.freepik.com/free-vector/check-list-shopping-icon-isolated_18591-82224.jpg?ga=GA1.1.738696290.1725114929&semt=ais_hybrid"
            alt="Task Icon"
            className="w-24 h-24 mr-4"
          />

          <div className="flex flex-col w-full">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {editIndex !== null ? "Edit Task" : "Add Task"}
            </h3>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddOrUpdateTask}
              className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 transform hover:scale-105"
            >
              {editIndex !== null ? "Update Task" : "Add Task"}
            </button>
          </div>
        </div>

        <div className="w-full max-w-3xl bg-white p-5 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Your Tasks</h3>
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-lg">No tasks added yet.</p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex flex-col bg-gray-200 p-4 rounded-lg shadow-md transition duration-300 hover:scale-105"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 text-lg">{task.text}</span>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEditTask(index)}
                        className="text-yellow-500 hover:text-yellow-600 transition duration-200 text-xl"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteTask(index)}
                        className="text-red-500 hover:text-red-600 transition duration-200 text-xl"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                  <span className="text-gray-600 text-sm">📅 {task.timestamp}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
