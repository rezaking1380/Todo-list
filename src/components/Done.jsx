import React from 'react'
import Task from './Task'


function Done({tasks}) {
    const doneTasks = tasks.filter((task) => task.compleate === true)


    return (
      <div className="flex flex-col w-[340px] p-5 bg-done rounded-[10px] mr-3">
          <div className="mb-5 flex justify-between">
              <span className="text-[#286C1A] text-lg font-semibold font-inter">
              Doing 🎉
              </span>
              <span className="text-[#BCD7B6] text-sm font-medium">
                  {doneTasks.length} Tasks
              </span>
          </div>
          <div>
              {doneTasks.map((task,index) => (
                  task.compleate === true &&
                  <div key={index} className='group bg-[#fff] border-[#D0E7CB] flex justify-between border  rounded-[4px] px-[10px] py-3 mb-3 items-center'>
                      <Task  task={task} />
                  </div>
              ))}
          </div>

      </div>
    )
}

export default Done