import Task from "./Task"
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import AddTask from "./AddTask.jsx";

function Todo({tasks}) {
    const [isNewTask, setIsNewTask] = useState(false);
    const todoTasks = tasks.filter((task) => task.category === 'todo')

  return (
    <div className="flex flex-col w-[340px] p-5 bg-todo rounded-[10px] mr-3">
        <div className="mb-5 flex justify-between">
            <span className="text-[#6E1E29] text-lg font-semibold">
            Todo
            </span>
            <span className="text-[#D4AFB4] text-sm font-medium">
                {todoTasks.length} Tasks
            </span>
        </div>
        <div>
            {todoTasks.map((task,index) => (
                task.compleate == false &&
                <div key={index} className='group bg-[#fff] border-[#F3E1DF] flex justify-between border  rounded-[4px] px-[10px] py-3 mb-3 items-center'>
                    <Task task={task} />
                </div>
            ))}
        </div>
        {
            isNewTask ? (
                <AddTask isopen={setIsNewTask} category={'todo'} />
            ) : (
                <div className="flex items-center text-[#D37A87]" onClick={() => setIsNewTask(true)}>
                    <AiOutlinePlus />
                    <span className='ml-[10px] font-semibold'>
                New
            </span>
                </div>
            )
        }
    </div>
  )
}

export default Todo