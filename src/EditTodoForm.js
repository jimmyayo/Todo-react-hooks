import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';


function EditTodoForm({todo, toggleEditForm}) {
  const [value, handleChange, reset] = useInputState(todo.task);
  const { editTodo } = useContext(TodosContext);

  function handleKeyDown(e){
    if (e.keyCode === 27) {
      //User hit ESC key
      reset();
      toggleEditForm();
    }
  }

  return (
    <form onSubmit={e => {
        e.preventDefault();
        editTodo(todo.id, value);
        reset();
        toggleEditForm();
        }}
      style={{marginLeft: "1rem", width: "50%"}}>

    
    <TextField 
      value={value} 
      autoFocus
      margin="normal" 
      onChange={handleChange}
      
      onKeyDown={handleKeyDown} 
      fullWidth />
    </form>
  )
}

export default EditTodoForm;