import React from 'react';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import ToDoListContextProvider from './contexts/ToDoListContext';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <ToDoListContextProvider>
            <ThemeContextProvider>
              <NavBar />
              <ToDoList />
            </ThemeContextProvider>
          </ToDoListContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
