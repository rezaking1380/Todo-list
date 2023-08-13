import React from 'react'
import Task from './Task'

function Doing({tasks}) {
    const doingTasks = tasks.filter((task) => task.category === 'doing')
    
    return (
      <div className="flex flex-col max-w-[340px] p-5 bg-todo rounded-[10px] mr-3">
          <div className="mb-5 flex justify-between">
              <span className="text-[#6E1E29]">
              Doing
              </span>
              <span className="text-[#D4AFB4]">
                  {doingTasks.length} Tasks
              </span>
          </div>
          <div>
              {doingTasks.map((task,index) => (
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

export default Doing