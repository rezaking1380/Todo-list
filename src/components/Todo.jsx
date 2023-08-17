import Task from "./Task";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddTask from "./AddTask.jsx";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { draggingTask } from "../redux/Actions";

function Todo({ tasks }) {
  const [isNewTask, setIsNewTask] = useState(false);
  const todoTasks = tasks.filter((task) => task.category === "todo");
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    dispatch(draggingTask({ id, category: "todo" }));
  };
  return (
    <div
      ref={drop}
      className="flex flex-col w-[340px] p-5 bg-todo rounded-[10px] mr-3"
    >
      <div className="mb-5 flex justify-between">
        <span className="text-[#6E1E29] text-lg font-semibold">Todo</span>
        <span className="text-[#D4AFB4] text-sm font-medium">
          {todoTasks.length} Tasks
        </span>
      </div>
      <div>
        {todoTasks.map(
          (task) =>
            task.compleate == false && <Task key={task.id} task={task} />
        )}
        {isOver && (
          <div className="border-[#F3E1DF] border-dashed min-h-[68px] px-[10px] py-3 bg-[#fff] border  rounded-[4px] mb-3"></div>
        )}
      </div>
      {isNewTask ? (
        <AddTask isopen={setIsNewTask} category={"todo"} />
      ) : (
        <div
          className="flex items-center text-[#D37A87]"
          onClick={() => setIsNewTask(true)}
        >
          <AiOutlinePlus />
          <span className="ml-[10px] font-semibold">New</span>
        </div>
      )}
    </div>
  );
}

export default Todo;
