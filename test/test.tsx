'use client';

import React, { use, useState } from 'react';
import styles from './test.module.css';
import { createTodoModel } from './model';
import { createTodoController } from './output';
import  TodoView  from './view';

export default function test (): JSX.Element {
// Your Test Starts Here

const model = createTodoModel();
const [ input, setInput ] = useState<string>('');
const [todos, setTodos] = useState<string[]>(model.getTodos());

const controller = createTodoController(model, setTodos);

    return (
        <div className={styles.container}>
            <TodoView 
                input={input}
                todos={todos}
                onInputChange={setInput}
                onAdd={() => {controller.handleAdd(input);
                    setInput('');
                }}
                onDelete={controller.handleDelete}
                onReset={() => controller.handleReset()}
            />
            
        </div>
    );
};