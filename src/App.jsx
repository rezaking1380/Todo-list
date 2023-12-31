
import { useSelector } from 'react-redux'
import Todo from './components/todo'
import Doing from './components/Doing'
import Done from './components/Done'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {ToastContainer} from "react-toastify";


function App() {
  const tasks = useSelector((state) => state.tasks)
  
  return (
    <>
        <ToastContainer />
      <div className='max-w-[1060px] m-auto my-[70px] h-full'>
        <div className='text-4xl font-bold mb-4 font-inter'>✔️ Task List</div>
        <div className='mb-11'>
          <span className='text-lg font-medium font-inter'>
          Break your life to simple tasks to get things done!
Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.
          </span>
        </div>
        <div className='flex min-h-[600px]'>
          <DndProvider backend={HTML5Backend}>
          <Todo tasks={tasks} />
          <Doing tasks={tasks} />
          <Done tasks={tasks} />
          </DndProvider>
        </div>
      </div>
    </>
  )
}

export default App;
