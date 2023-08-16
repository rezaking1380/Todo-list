import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import todo from "./Todo.jsx";
import {editTask, isCompleteTask, removeTask, TODO_DELETE} from "../redux/Actions.js";
import {Checkbox} from "@mui/material";

function Task({task}) {
  const [compleate, setCmpleate] = useState(task.compleate)
    const [editing, setEditing] = useState(task.text);
    const [isEdited, setIsEdited] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        setCmpleate(task.compleate)
    }, [compleate]);
const deleteTask = () =>{
    // console.log(task.id)
      dispatch(removeTask(task.id))
      // dispatch({type:TODO_DELETE,id:task.id})
}
  const handleInputChange = () => {
      dispatch(isCompleteTask(task.id))
      setCmpleate(!compleate)
  }
  const handelEdit = () =>{
    setIsEdited(true)

  }
  const handleSubmitEdit = (e) => {
      e.preventDefault();
      if (editing.trim() === '') {
          return;
      }
      const edit = {
          id: task.id,
          text: editing,
          compleate: compleate,
          category: task.category
      }
      dispatch(editTask(edit))
      setIsEdited(false)
  }

  return (
    <>
        <div className='flex items-center'>
            <Checkbox onChange={handleInputChange} checked={compleate}
                      sx={
                task.category === 'todo' ?
                    {
                        color: '#F4C5CB',
                        '&.Mui-checked': {
                            color: '#9BCD90',
                        },
                    } : {
                        color: '#DBD2BC',
                        '&.Mui-checked': {
                            color: '#9BCD90',
                        },
                    }
                } />
            {
                isEdited ? (
                    <form onSubmit={handleSubmitEdit}>
                        <input
                            type="text"
                            value={editing}
                            onChange={(e) => setEditing(e.target.value)}
                        />
                        <button type="submit" className='hidden'>Edit Todo</button>
                    </form>
                ) : <span className={compleate ? "line-through":'no-underline text-sm'} onDoubleClick={handelEdit}>{task.text}</span>

            }
        </div>
        <div className='w-4 h-4 cursor-pointer' onClick={deleteTask}>
            <AiOutlineClose color='#F4C5CB'  className={`hidden group-hover:flex`} />
        </div>
    </>

  )
}

export default Task