import Task from "./Task";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { draggingTask } from "../redux/Actions";

function Done({ tasks }) {
  const doneTasks = tasks.filter((task) => task.compleate === true);

  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    dispatch(draggingTask({ id, category: "done" }));
  };
  return (
    <div
      ref={drop}
      className="flex flex-col w-[340px] p-5 bg-done rounded-[10px] mr-3"
    >
      <div className="mb-5 flex justify-between">
        <span className="text-[#286C1A] text-lg font-semibold font-inter">
          Done 🎉
        </span>
        <span className="text-[#BCD7B6] text-sm font-medium font-inter">
          {doneTasks.length} Tasks
        </span>
      </div>
      <div>
        {doneTasks.map(
          (task) =>
            task.compleate === true && <Task key={task.id} task={task} />
        )}
        {isOver && (
          <div className="border-[#D0E7CB] border-dashed min-h-[68px] px-[10px] py-3 bg-[#fff] border  rounded-[4px] mb-3"></div>
        )}
      </div>
    </div>
  );
}

export default Done;
