import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoText.trim() === '') {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            text: todoText,
        };

        dispatch(addTodo(newTodo));
        setTodoText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;