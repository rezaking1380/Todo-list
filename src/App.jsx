
import { useSelector } from 'react-redux'
import Todo from './components/todo'
import Doing from './components/Doing'
import Done from './components/Done'
import AddTask from "./components/AddTask.jsx";


function App() {
  const tasks = useSelector((state) => state.tasks)
  
  return (
    <>
      <div className='max-w-[1060px] m-auto my-[70px] h-full'>
        <div className='text-4xl font-bold mb-4'>✔️ Task List</div>
        <div className='mb-11'>
          <span className='text-lg font-medium'>
          Break your life to simple tasks to get things done!
Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.
          </span>
        </div>
        <div className='flex min-h-[700px]'>
          <Todo tasks={tasks} />
          <Doing tasks={tasks} />
          <Done tasks={tasks} />
        </div>
      </div>
    </>
  )
}

export default App
