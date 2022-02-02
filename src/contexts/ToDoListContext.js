import React, { createContext, useState, useReducer } from 'react';

export const ToDoListContext = createContext();

const toDosReducer = (state, action) => {
  switch(action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        {text: action.text, id: Math.random()}
      ];

    case 'REMOVE_TODO':
      return (
        state.filter((x) => (
          x.id !== Number(action.id)
        ))
      );

    default:
      return state;
  }
};

const ToDoListContextProvider = (props) => {
  const [toDos, dispatch] = useReducer(toDosReducer, [
    {text: "Plan the family trip", id: 1},
    {text: "Go shopping for dinner", id: 2},
    {text: "Go for a walk", id: 3},
  ]);

/*  const addToDo = (todo) => {
      setToDos([                            // Letting the user to add new todos on the list
        ...toDos,
        {text: todo, id: Math.random()}
      ]);
  };

  // Iterating through the todos array using the x variable
  // If the id we pass in is not equal to the current hook
  // Then we are going to return true  and then we will keep
  // that id in the todos array but if the hook id is equal
  // to the id that we are passing in then this function will
  // return false and it will remove that id from the array.

  const removeToDo = (id) => {
      setToDos(toDos.filer((x) => {         // Letting the user to remove todos from the list
        return x.id !== Number(id);         // Typecasting the string id to number id
      }));
  };  */

  return (
    // <ToDoListContext.Provider value={{ toDos, addToDo, removeToDo }}>
    <ToDoListContext.Provider value={{ toDos, dispatch }}>
      {props.children}
    </ToDoListContext.Provider>
  )
};

export default ToDoListContextProvider;
