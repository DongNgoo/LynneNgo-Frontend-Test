'use client';

import React, { useState, useMemo } from 'react';
import styles from './test.module.css';
import { createTodoModel } from './model';
import { createTodoController } from './output';
import  TodoView  from './view';


export default function test (): JSX.Element {
// Your Test Starts Here

const model =  useMemo(() => createTodoModel(), []); 

const [todos, setTodos] = useState<string[]>(model.getTodos());
const [input, setInput] = useState<string>('');

const controller = createTodoController(model, setTodos);

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