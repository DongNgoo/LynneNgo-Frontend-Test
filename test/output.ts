type ModelType = {
    getTodos: () => string[];
    addTodo: (text: string) => void;
    removeTodo: (index: number) => void;
    reset: () => void;
}
// createTodoController take in a model and a setTodos function
export function createTodoController(model: ModelType, setTodos: (todos: string[]) => void) {
    const handleAdd = (text: string) => {
        model.addTodo(text);
       return model.getTodos();
    };

    const handleDelete = (index: number) => {
        model.removeTodo(index);
        setTodos([...model.getTodos()]);
    };

    const handleReset = () => {
        model.reset();
        setTodos([...model.getTodos()]);
    };

    return { handleAdd, handleDelete, handleReset };
    
}