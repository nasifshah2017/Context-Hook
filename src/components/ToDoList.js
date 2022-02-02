import React, { Component, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ToDoListContext } from '../contexts/ToDoListContext';

/* class ToDoList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return(
      <div style={{ background: theme.background, color: theme.text, height: "140px", textAlign: "center" }}>
        <p className="item">Plan the family trip</p>
        <p className="item">Go for shopping for dinner</p>
        <p className="item">Go for a walk</p>
        <button className="ui button primary" onClick={changeTheme}>Change Theme</button>
      </div>
    )
  }
}: */

// The way of importing data from another component to this component which would have been
// only possible if this component was a class based component but the useContext() hook has
// made it possible to import the data in the functional component.

const ToDoList = () => {
//  It will provide us all the state objects and properties from ThemeContext component
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
//  const { toDos, addToDo, removeToDo } = useContext(ToDoListContext);
    const { toDos, dispatch } = useContext(ToDoListContext);
    const [toDo, setToDo] = useState('');

  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
//    addToDo(toDo);
    dispatch({type: 'ADD_TODO', text: toDo});
  };

  const handleRemoveToDo = (e) => {
    const id = e.target.id;
//    removeToDo(id);
      dispatch({type: 'REMOVE_TODO', id: id});
  };

  return(
    <div style={{ background: theme.background, color: theme.text, textAlign: "center" }}>
      {
        toDos.length ? (
          toDos.map((x) => {
            return (
              <p id={x.id} onClick={handleRemoveToDo} key={x.id} className="item">{x.text}</p>
            )
          })
        ) : (
          <div>You have no todos item on the list</div>
        )
      }
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">Add Todo: </label>
        <input type="text" id="todo" onChange={handleChange} />
        <input type="submit" value="Add New Todo" className="ui button primary" />
      </form>
      <button className="ui button primary" onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default ToDoList;
