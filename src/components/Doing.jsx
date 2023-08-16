import React, {useState} from 'react'
import Task from './Task'
import { AiOutlinePlus } from "react-icons/ai";
import {useSelector} from "react-redux";
import AddTask from "./AddTask.jsx";

function Doing({tasks}) {
    const [isNewTask, setIsNewTask] = useState(false);
    const doingTasks = tasks.filter((task) => task.category === 'doing')

    return (
      <div className="flex flex-col w-[340px] p-5 bg-doing rounded-[10px] mr-3">
          <div className="mb-5 flex justify-between">
              <span className="text-[#795B19] text-lg font-semibold">
              Doing 💪
              </span>
              <span className="text-[#DECCA4] text-sm font-medium">
                  {doingTasks.length} Tasks
              </span>
          </div>
          <div>
              {doingTasks.map((task,index) => (
                  task.compleate == false &&
                  <div key={index} className='group bg-[#fff] border-[#DBD2BC] flex justify-between border  rounded-[4px] px-[10px] py-3 mb-3 items-center'>
                  <Task task={task} />
                  </div>
              ))}
          </div>
          {
              isNewTask ? (
                  <AddTask isopen={setIsNewTask} category={'doing'} />
              ) : (
                  <div className="flex items-center text-[#C2A25B]" onClick={() => setIsNewTask(true)}>
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

export default Doing