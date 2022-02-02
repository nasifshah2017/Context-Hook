import React, { Component, createContext, useState } from 'react';

export const AuthContext = createContext();

/* class AuthContextProvider extends Component {
  state = {
    isLoggedIn: false
  };

  changeAuthStatus = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  };

  render() {
    return(
      <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
} */

const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeAuthStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return(
    <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus: changeAuthStatus }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
