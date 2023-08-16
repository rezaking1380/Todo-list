import {TODO_ADD, TODO_COMPLETE, TODO_DELETE, TODO_EDIT, TODO_LIST} from "./Actions";
import uuid from 'react-uuid';

export const initialState = {
    loading: false,
    tasks: localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : [
        {
            id:uuid(),
            compleate: false,
            text: 'Start with meditation, exercise & breakfast for a productive day',
            category: 'todo'
        },
        {
            id:uuid(),
            compleate: false,
            text: 'Read to learn something new every day',
            category: 'todo'
        },
        {
            id:uuid(),
            compleate: false,
            text: 'Learn something fresh & relevant',
            category: 'todo'
        },
        {
            id:uuid(),
            compleate: false,
            text: 'Engage & question in meetings',
            category: 'doing'
        },
        {
            id:uuid(),
            compleate: false,
            text: 'Use time-blocking for effective days',
            category: 'doing'
        },
        {
            id:uuid(),
            compleate: true,
            text: 'Finished online course - check!',
            category: 'done'
        },
        {
            id:uuid(),
            compleate: true,
            text: 'Congratulate yourself for incorporating healthier habits into your lifestyle, like regular exercise or mindful eating',
            category: 'done'
        },
    ],
    error: ''
  };

const Reducer = (state=initialState,action) => {
  switch (action.type) {
    case TODO_LIST:
        return {
            ...state,
        }
        case TODO_DELETE:
          const NewTasks = state.tasks.filter((task) => action.id !== task.id )
          const newTask =  {
          ...state,
                  tasks: [
                  ...NewTasks
              ]
          }
          localStorage.setItem('tasks', JSON.stringify(newTask.tasks));
          return newTask;

      case TODO_ADD:
          const addTask =  {
              ...state,
              tasks: [...state.tasks, action.task],
          }
          localStorage.setItem('tasks', JSON.stringify(addTask.tasks));
          return addTask;

      case TODO_EDIT:
          const editTask = {
      ...state,
              tasks: state.tasks.map((task) =>
              action.task.id === task.id ? action.task : task
          ),
      }
          localStorage.setItem('tasks', JSON.stringify(editTask.tasks));
          return editTask
      case TODO_COMPLETE:
          const isComplete = state.tasks.map((task) => task.id === action.id ? {...task,compleate : task.compleate = !task.compleate} : task)
          console.log(isComplete)
          const changeCategory = isComplete.map((task) => task.compleate === false && task.category !== 'doing' ? {...task,category : task.category = 'todo'} : task)
          const completeTask =  {
              ...state,
              tasks: changeCategory
          }
          localStorage.setItem('tasks', JSON.stringify(completeTask.tasks));
          return completeTask
    default:
        return state
  }
}

export default Reducer
