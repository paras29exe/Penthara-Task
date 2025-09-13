import ThemeSwitcher from "./utils/ThemeSwitcher";
import TaskForm from "./components/TaskForm";
import { useTodo } from "./services/todoContext";
import { useState } from "react";
import TaskList from "./components/TaskList";
import FilterComponent from "./components/FilterComponent";

function App() {
  const { tasks } = useTodo();
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  return (
    <>
      <div className="bg-slate-100 dark:bg-zinc-900 min-h-screen text-black dark:text-white p-4">
        <div className="w-fit ml-auto mr-4 mb-4">
          <ThemeSwitcher />
        </div>
        <div className="max-w-5xl mx-auto space-y-4">
          <h1 className="text-4xl text-center font-bold underline">
            Track Your Tasks
          </h1>
          {/* input box for adding a new task */}
          <TaskForm />

          {/* filters component/select box */}
          <FilterComponent tasks={tasks} setFilteredTasks={setFilteredTasks} />

          {/* tasklist component taking all those filtered tasks */}
          <TaskList tasks={filteredTasks} />
        </div>
      </div>
    </>

  );
}

export default App;
