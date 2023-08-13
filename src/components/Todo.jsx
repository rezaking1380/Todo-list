import Task from "./Task"
import { useState } from "react";

function Todo({tasks}) {
    const todoTasks = tasks.filter((task) => task.category === 'todo')


  return (
    <div className="flex flex-col max-w-[340px] p-5 bg-todo rounded-[10px] mr-3">
        <div className="mb-5 flex justify-between">
            <span className="text-[#6E1E29]">
            Todo
            </span>
            <span className="text-[#D4AFB4]">
                {todoTasks.length} Tasks
            </span>
        </div>
        <div>
            {todoTasks.map((task,index) => (
                task.compleate == false && <Task key={index} task={task} />
            ))}
        </div>
        <div>

            <span>
                New
            </span>
        </div>
    </div>
  )
}

export default Todo