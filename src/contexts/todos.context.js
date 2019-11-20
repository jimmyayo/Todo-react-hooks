import React, { createContext } from "react";
import useTodoState from "../hooks/UseTodoState";
import todosReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  // initialize todos with just an empty array
  const [todos, dispatch] = useLocalStorageReducer("todos", [], todosReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}