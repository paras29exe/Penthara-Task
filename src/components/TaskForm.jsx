import { useTodo } from "../services/todoContext";

function TaskForm() {
    const { addTask } = useTodo();

    return (
        <form className="w-full" onSubmit={addTask}>
            <div className="flex flex-col sm:flex-row w-full sm:border rounded-md overflow-hidden">
                {/* Task input */}
                <input
                    type="text"
                    name="task"
                    required
                    placeholder="Add a new task...."
                    className="p-2 sm:w-4/5 w-full focus:outline-none max-sm:border max-sm:rounded-t-md dark:bg-zinc-800 dark:text-white"
                />

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-blue-500 sm:w-1/5 w-full text-white p-2 hover:bg-blue-600 transition-colors"
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default TaskForm