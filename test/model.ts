export function createTodoModel() {
   let todos: string[] = [];

    const getTodos = () => todos;

    const addTodo = (text: string) => {
        if(text.trim() !== '') {
        todos.push(text.trim());
        }
    };

    const  removeTodo = (index: number) => {
        todos = todos.filter((_, i) => i !== index);
    };

    const reset = () => {
        todos = [];
    };

    return { getTodos, addTodo, removeTodo, reset };
}