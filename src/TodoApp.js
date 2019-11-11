import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import UseTodoState from "./hooks/UseTodoState";
import { TodosProvider } from "./contexts/todos.context";

const TodoApp = function () {
  const initialTodos = [];

  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = UseTodoState(initialTodos);

  return (
    <Paper
      elevation={0}
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "fafafa"
      }}>
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">
            TODO LIST
          </Typography>
        </ToolBar>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm
              addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={deleteTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo} />
          </TodosProvider>
        </Grid>

      </Grid>


    </Paper>
  )
}

export default TodoApp;