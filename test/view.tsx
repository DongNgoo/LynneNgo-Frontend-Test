import React from 'react';

interface TodoViewProps {
    input: string
    todos: string[];
    onInputChange: (value: string) => void;
    onAdd: () => void;
    onDelete: (index: number) => void;
    onReset: () => void;
}

export default function TodoView ({
    input, 
    todos, 
    onInputChange,
    onAdd,
    onDelete,
    onReset
}: TodoViewProps) {
    return (
    <div style={styles.container}>
        <h1 style={styles.title}>To-Do List</h1>
        <div style={styles.inputArea}>
            <input type="text" value={input} onChange={(e) => onInputChange(e.target.value)} 
            placeholder='Enter a task'
            style={styles.input}
            />
            <button onClick={onAdd} style={styles.button}>Add</button>
        </div>
        <ul style={styles.list}>
            {todos.map((todo, index) => (
                <li key={index} style = {styles.todoItem}>
                    <span>{todo}</span>
                    <button onClick={() => onDelete(index)} style={styles.deleteBtn}>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={onReset} style={styles.button}>Reset</button>
    </div>
    );
}

const styles = {
    container: {
        width: '80%',
        margin: 'auto',
        lineHeight: '1.5',
        marginBottom: '10px',
    },
    title: {
        marginTop: '10px',
        fontWeight: '500',
        textAlign: 'center',
    },
    inputArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    deleteBtn: {
        padding: '5px 10px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    }