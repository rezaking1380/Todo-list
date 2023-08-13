
import { useSelector } from 'react-redux'
import Todo from './components/todo'
import Doing from './components/Doing'


function App() {
  const tasks = useSelector((state) => state.tasks)
  
  return (
    <>
      <div>
        <div>Task List</div>
        <div>
          <span>
          Break your life to simple tasks to get things done!
Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.
          </span>
        </div>
        <div className='flex'>
          <Todo tasks={tasks} />
          <Doing tasks={tasks} />
        </div>
      </div>
    </>
  )
}

export default App
