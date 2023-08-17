import { useState } from "react";
import Task from "./Task";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import AddTask from "./AddTask.jsx";
import { useDrop } from "react-dnd";
import { draggingTask } from "../redux/Actions";

function Doing({ tasks }) {
  const [isNewTask, setIsNewTask] = useState(false);
  const doingTasks = tasks.filter((task) => task.category === "doing");
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    dispatch(draggingTask({ id, category: "doing" }));
  };

  return (
    <div
      ref={drop}
      className="flex flex-col w-[340px] p-5 bg-doing rounded-[10px] mr-3"
    >
      <div className="mb-5 flex justify-between">
        <span className="text-[#795B19] text-lg font-semibold font-inter">Doing 💪</span>
        <span className="text-[#DECCA4] text-sm font-medium font-inter">
          {doingTasks.length} Tasks
        </span>
      </div>
      <div>
        {doingTasks.map(
          (task) =>
            task.compleate == false && <Task key={task.id} task={task} />
        )}
        {isOver && (
          <div className="border-[#DBD2BC] border-dashed min-h-[68px] px-[10px] py-3 bg-[#fff] border  rounded-[4px] mb-3"></div>
        )}
      </div>
      {isNewTask ? (
        <AddTask isopen={setIsNewTask} category={"doing"} />
      ) : (
        <div
          className="flex items-center text-[#C2A25B]"
          onClick={() => setIsNewTask(true)}
        >
          <AiOutlinePlus />
          <span className="ml-[10px] font-semibold">New</span>
        </div>
      )}
    </div>
  );
}

export default Doing;
