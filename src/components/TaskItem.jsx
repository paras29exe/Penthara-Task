import { useState } from "react";
import { useTodo } from "../services/todoContext";
import { Edit, Save, Trash, X } from "lucide-react";

export default function TaskItem({ task }) {
    const { editTask, toggleCompleted, deleteTask } = useTodo();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        if (isEditing && newText.trim()) {
            editTask(task.id, newText.trim());
        }
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setNewText(task.text);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <div className={`flex gap-x-3 items-center w-full p-3 shadow-md rounded-md bg-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors ${task.completed ? ' dark:bg-green-800 dark:hover:bg-green-700 bg-green-400 hover:bg-green-500 ' : ''}`}>
            {/* Checkbox */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
                className="w-4 h-4 cursor-pointer"
            />

            {/* Task text or input field */}
            <div className="w-full">
                {isEditing ? (
                    // form is used to handle validation on submit and enter key press like empty text
                    <form
                        onKeyDown={handleKeyDown}
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleEdit();
                        }}
                        className="flex w-full items-center gap-2"
                    >
                        <input
                            type="text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            className="w-full text-lg p-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                            autoFocus
                            required
                        />
                        <button type="submit" className="p-1.5">
                            <Save className="text-green-600" />
                        </button>
                        <button type="button" onClick={handleCancel} className="p-1.5">
                            <X className="text-red-600" />
                        </button>
                    </form>
                ) : (
                    <span className={task.completed ? "line-through text-lg text-gray-500 dark:text-gray-300"
                        : "text-gray-800 dark:text-white"}
                    >
                        {task.text}
                    </span>
                )}

            </div>

            {/* Action buttons show only when not editing */}
            {!isEditing && (
                <div className="flex gap-2">
                    {/* Edit button */}
                    <button
                        onClick={handleEdit}
                        className="p-1.5 dark:text-gray-300 text-gray-800 hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-500 "
                        title={"Edit"}
                        disabled={task.completed}
                    >
                        <Edit />
                    </button>

                    {/* Delete button */}
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="p-1.5 dark:text-gray-300 text-gray-800 hover:text-red-600"
                        title="Delete"
                    >
                        <Trash />
                    </button>
                </div>
            )}
        </div>
    );
}
