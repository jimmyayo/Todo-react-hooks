import uuid from 'uuid/v4';
import useLocalStorageState from "./useLocalStorageState";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  
  return {
    todos,
    addTodo : newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    deleteTodo: id => {
      setTodos( todos.filter(todo => todo.id !== id) );
    },
    toggleTodo: id => {
      const updatedTodos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (id, newTask) => {
      const updatedTodos = todos.map(todo => 
        todo.id === id ? {...todo, task: newTask} : todo
      );
      setTodos(updatedTodos);
    }
  }
}
