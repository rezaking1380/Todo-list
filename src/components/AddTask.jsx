import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import uuid from 'react-uuid';
import {addTask} from "../redux/Actions.js";
import task from "./Task.jsx";
const AddTask = ({isopen,category}) => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoText.trim() === '') {
            return;
        }
        if (todoText.split('.')) {
            const texts = todoText.split('.')
            texts.map((text) =>{
                const newTodo = {
                    id: uuid(),
                    text: text,
                    compleate: false,
                    category: category
                };
                dispatch(addTask(newTodo));
            })
        } else {
            const newTodo = {
                id: uuid(),
                text: todoText,
                compleate: false,
                category: category
            };
            dispatch(addTask(newTodo));
        }
        setTodoText('');
        isopen(false)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='px-[10px] py-3 w-full'
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit" className='hidden'>Add Todo</button>
        </form>
    );
};

export default AddTask;