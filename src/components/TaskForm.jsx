import { useTodo } from "../services/todoContext";

function TaskForm() {
    const { addTask } = useTodo();

    return (
        <form className="w-full" onSubmit={addTask}>
            <div className="flex flex-col gap-y-2.5 sm:flex-row w-full sm:border rounded-md overflow-hidden">
                {/* Task input */}
                <input
                    type="text"
                    name="task"
                    required
                    placeholder="Add a new task...."
                    className="p-3 sm:w-4/5 w-full focus:outline-none border sm:border-0 rounded-md dark:bg-zinc-800 dark:text-white"
                />

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-blue-600 rounded-md font-medium sm:rounded-none sm:w-1/5 w-full text-white p-3 hover:bg-blue-700 transition-colors"
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default TaskForm