import React, { Fragment, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';


function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length ) 
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <Fragment key={idx}>
              <Todo todo={todo} key={todo.id} />

                { todos.length - 1 === idx || <Divider /> }
              
            </Fragment>
          ))}
        </List>

      </Paper>
    )
    return null;
}

export default TodoList;