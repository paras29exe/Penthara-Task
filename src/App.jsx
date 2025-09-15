import ThemeSwitcher from "./utils/ThemeSwitcher";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import TaskList from "./components/TaskList";
import FilterComponent from "./components/FilterComponent";

function App() {
  // state to manage the selected filter in the filter component and then pass it to tasklist for filtering tasks
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div className="bg-slate-100 dark:bg-zinc-900 min-h-screen text-black dark:text-white p-4">
        <div className="max-w-5xl mx-auto space-y-4">

          <div className="w-fit ml-auto mb-4">
            {/* theme switcher toggle button */}
            <ThemeSwitcher />
          </div>

          <h1 className="text-4xl text-center font-medium underline underline-offset-5">
            Track Your Tasks
          </h1>
          {/* input box for adding a new task */}
          <div className="mb-20">
            <TaskForm />
          </div>

          {/* filters component/select box which updates the filter state */}
          <FilterComponent filter={filter} setFilter={setFilter} />

          {/* tasklist component taking filter as a prop */}
          <TaskList filter={filter} />
        </div>
      </div>
    </>

  );
}

export default App;
