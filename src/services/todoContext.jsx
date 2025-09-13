import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../constants";

const TodoContext = createContext({
    tasks: [],
    addTask: (task) => { },
    editTask: (id, newTask) => { },
    toggleCompleted: (id) => { },
    deleteTask: (id) => { }
});

export const TodoProvider = ({ children }) => {
    // using the function in usestate because it will only run on 1st render or intialization phase but normal way runs on each render, so it is a small otimisation for performance
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    });

    const addTask = (e) => {
        e.preventDefault();
        const text = e.target.task.value.trim();
        if (!text) return; // prevent empty tasks

        const newTask = {
            // unique id for efficiently managing tasks
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTasks((prevTasks) => [newTask, ...prevTasks]);
        // clear input after adding
        e.target.reset();
    };

    const editTask = (id, newTask) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, text: newTask } : task
            )
        );
    };

    const toggleCompleted = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    // Save tasks to localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TodoContext.Provider
            value={{
                tasks,
                addTask,
                editTask,
                toggleCompleted,
                deleteTask
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    return useContext(TodoContext);
};