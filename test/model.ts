export function createTodoModel() {
  // Create the model for the to-do list
    let todos: string[] = [];

    const getTodos = () => todos;

// Add a new todo by pushing it to the todos array
    const addTodo = (text: string) => {
        if(text.trim() !== '') {
        todos.push(text.trim());
        console.log(`New item added at index ${todos.length - 1}`);
        }
        return todos;
        
    };
//Remove a todo by filtering out the todo with the given index
    const  removeTodo = (index: number) => {
        todos = todos.filter((_, i) => i !== index);
    };
//Reset the todos array
    const reset = () => {
        todos = [];
    };

    return { getTodos, addTodo, removeTodo, reset };
}