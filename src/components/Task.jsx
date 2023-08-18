import {useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  editTask,
  isCompleteTask,
  removeTask,
} from "../redux/Actions.js";
import { Checkbox } from "@mui/material";
import { useDrag } from "react-dnd";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

function Task({ task }) {
  const [compleate, setCmpleate] = useState(task.compleate);
  const [editing, setEditing] = useState(task.text);
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();
  let borderColor = "";
  if (task.category === "todo") {
    borderColor = "#F3E1DF";
  }
  if (task.category === "doing") {
    borderColor = "#DBD2BC";
  }
  if (task.category === "done") {
    borderColor = "#D0E7CB";
  }
  const deleteTask = () => {
    dispatch(removeTask(task.id));
    toast.error('You deleted a task :-(', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleComplete = () => {
    dispatch(isCompleteTask(task.id));
    setCmpleate(!compleate);
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (editing.trim() === "") {
      return;
    }
    const edit = {
      id: task.id,
      text: editing,
      compleate: compleate,
      category: task.category,
    };
    dispatch(editTask(edit));
    setIsEdited(false);
    toast.info('You edited a task 👍', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id, category: task.category },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className={`flex justify-between min-h-[68px] px-[10px] py-3 items-center group bg-[#fff] border  rounded-[4px] mb-3 ${
        isDragging
          ? `border-dashed border-[${borderColor}]`
          : `border-[${borderColor}]`
      }`}
      ref={drag}
    >
      {isDragging === false && (
        <>
          <div className="flex items-center">
            <Checkbox
              onChange={handleComplete}
              checked={compleate}
              sx={
                task.category === "todo"
                  ? {
                      color: "#F4C5CB",
                      "&.Mui-checked": {
                        color: "#9BCD90",
                      },
                    }
                  : {
                      color: "#DBD2BC",
                      "&.Mui-checked": {
                        color: "#9BCD90",
                      },
                    }
              }
            />
            {isEdited ? (
              <form onSubmit={handleSubmitEdit}>
                <input
                  type="text"
                  value={editing}
                  onChange={(e) => setEditing(e.target.value)}
                />
                <button type="submit" className="hidden">
                  Edit Todo
                </button>
              </form>
            ) : (
              <span
                className={compleate ? "line-through font-inter" : "no-underline text-sm font-inter"}
                onDoubleClick={() => setIsEdited(true)}
              >
                {task.text}
              </span>
            )}
          </div>
          <div className="w-4 h-4 cursor-pointer" onClick={deleteTask}>
            <AiOutlineClose
              color="#F4C5CB"
              className={`hidden group-hover:flex`}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
