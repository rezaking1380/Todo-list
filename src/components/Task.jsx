import { useDraggable } from '@dnd-kit/core';
import { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";

function Task({task}) {
  const [compleate, setCmpleate] = useState(task.compleate)
  const handleInputChange = () => setCmpleate(!compleate)
  const {attributes, listeners , setNodeRef } = useDraggable({
    id: 'unique-id',
  });
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className='group bg-[#fff] flex justify-between border border-[#F3E1DF] rounded-[4px] px-[10px] py-3 mb-3 items-center'>
        <div className='flex items-center'>
        <input className='border border-[#F3E1DF]  mr-3 w-4 h-4' type="checkbox" name="task" id="task" value={compleate} onChange={handleInputChange} />
        <span className={compleate ? "line-through":'no-underline text-sm'}>{task.text}</span>
        </div>
        <div className='w-3 h-3 cursor-pointer'>
          <AiOutlineClose color='#F4C5CB' className='hidden group-hover:flex' />
        </div>
        
    </div>
  )
}

export default Task