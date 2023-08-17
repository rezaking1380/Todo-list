export const TODO_LIST = 'todo-list'
export const TODO_ADD = 'todo-add'
export const TODO_EDIT = 'todo-edit'
export const TODO_DELETE = 'todo-delete'
export const TODO_COMPLETE = 'todo-complete'
export const TODO_DRAGGABLE = 'todo-draggable'

export const addTask = (todo) => {
    return {
        type: TODO_ADD,
        task: todo,
    };
};

export const removeTask = (id) => {
    return {
        type: TODO_DELETE,
        id: id,
    };
};

export const editTask = (task) => {
    return {
        type: TODO_EDIT,
        task: task,
    };
};

export const isCompleteTask = (id) =>{
    return{
        type:TODO_COMPLETE,
        id:id
    }
}

export const draggingTask = ({id,category}) =>{
    return{
        type:TODO_DRAGGABLE,
        id,
        category
    }
}