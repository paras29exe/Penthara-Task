import { useTodo } from '../services/todoContext';
import TaskItem from './TaskItem'

function TaskList({ filter }) {
    const { tasks } = useTodo();

    const filteredTasks = tasks.filter(task => 
        filter === "completed" ? task.completed :
        filter === "pending" ? !task.completed :
        true
    );

    return (
        <div className="space-y-2">
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}

            {
                filteredTasks.length === 0 && (
                    <p className="text-center text-gray-500 dark:text-gray-400 ">No tasks to display. Add a new one.</p>
                )
            }
        </div>
    )
}

export default TaskList