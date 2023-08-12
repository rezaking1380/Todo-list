import { TODO_LIST } from "./Actions";


export const initialState = {
    loading: false,
    tasks: [
        {
            compleate: false,
            text: 'Start with meditation, exercise & breakfast for a productive day',
            category: 'todo'
        },
        {
            compleate: false,
            text: 'Read to learn something new every day',
            category: 'todo'
        },
        {
            compleate: false,
            text: 'Learn something fresh & relevant',
            category: 'todo'
        },
        {
            compleate: false,
            text: 'Engage & question in meetings',
            category: 'doing'
        },
        {
            compleate: false,
            text: 'Use time-blocking for effective days',
            category: 'doing'
        },
        {
            compleate: true,
            text: 'Finished online course - check!',
            category: 'done'
        },
        {
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
  
    default:
        return state
  }
}

export default Reducer
