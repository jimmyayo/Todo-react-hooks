import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './contexts/todos.context';

function Todo({ todo }) {
  const dispatch = useContext(DispatchContext);

  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px"}}>
      {
        isEditing ?
          <EditTodoForm todo={todo} toggleEditForm={toggle} />
          :
          <>
            <Checkbox 
              tabIndex={-1} 
              checked={todo.completed} 
              onChange={() => 
                dispatch({type: "TOGGLE", id: todo.id})} />
            <ListItemText style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }} >
              {todo.task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={toggle}>
                <EditIcon aria-label="Edit" />
              </IconButton>
              <IconButton onClick={() => { 
                dispatch({ type: "REMOVE", id: todo.id}) }}>
                <DeleteIcon aria-label="Delete" />
              </IconButton>
            </ListItemSecondaryAction>
          </>
      }
    </ListItem>

  )
}

export default Todo;