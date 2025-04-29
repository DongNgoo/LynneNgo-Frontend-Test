import React, { useState, useEffect } from 'react';

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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const styles = {
        container: {
            maxWidth: '500px',
            margin: '50px auto',
            padding: '16px',
            borderRadius: '12px',
            background: '#fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
           
        },
        title: {
            marginBottom: '16px',
            fontSize: '24px',
        },
        inputArea: {
            display: 'flex',
            // Set the flex-direction to column if the window width is less than or equal to 768px
            flexDirection:  isMobile ? 'column' as const : 'row' as const,
            gap: '10px',
            marginBottom: '16px',
        },
        input: {
            width: '100%',
            fontSize: '16px',
            background: "#fff",
            padding: '10px',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        todolist: {
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
        <ul style={styles.todolist}>
            {todos.map((todo, index) => (
                <li key={`todo-${index}`} style = {styles.todoItem}>
                    <span>{todo}</span>
                    <button onClick={() => onDelete(index)} style={styles.deleteBtn}>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={onReset} style={styles.button}>Reset</button>
    </div>
    );
}


