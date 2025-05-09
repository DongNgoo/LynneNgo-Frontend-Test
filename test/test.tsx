'use client';

import React, { useState, useRef } from 'react';
import styles from './test.module.css';
import { createTodoModel } from './model';
import { createTodoController } from './output';
import  TodoView  from './view';


export default function test (): JSX.Element {
// Your Test Starts Here

//initialize the model, controller, and view
const modelRef = useRef(createTodoModel());
const model = modelRef.current;


const [todos, setTodos] = useState<string[]>(model.getTodos());
const [input, setInput] = useState<string>('');


const controller = createTodoController(model, setTodos);
//return the view
    return (
        <div className={styles.container}>
            <TodoView 
                input={input}
                todos={todos}
                onInputChange={setInput}
                onAdd={() => {
                    if(input.trim() !== ''){
                   const newTodos = controller.handleAdd(input);
                    setTodos(newTodos);
                    setInput('');
                    }else {
                        alert('Please enter a task');
                    }
                }}
                onDelete={controller.handleDelete}
                onReset={() => controller.handleReset()}
            />

        </div>
    );
};