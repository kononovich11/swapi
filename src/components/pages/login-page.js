import React from 'react';
import {Redirect} from 'react-router-dom';

const LoginPage = ({isLogin, loginClick}) => {
  if(isLogin) {
    return <Redirect to="/"/>
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-primary"
        onClick={loginClick}>  
        Login
      </button>
    </div>
  );
};

export default LoginPage;