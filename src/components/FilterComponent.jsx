import { FilterIcon } from "lucide-react";

function FilterComponent({ filter, setFilter }) {

    return (
        <div className="ml-auto w-fit flex items-center gap-x-3 text-gray-700 dark:text-gray-300 ">
            <h4 className="flex items-center gap-x-2">Filters <FilterIcon className="w-4" />:</h4>
            <select className="border p-2 rounded-md dark:bg-gray-800" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option defaultChecked value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    )
}

export default FilterComponent