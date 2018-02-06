// Higher Order Components (HOC) - A component that renders another
// component. They allow us to:
// Reuse Code
// Render HiJacking
// Prop Manipulation
// Abtract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1> Info </h1>
    <p> The info is: {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p> This is private info. Please don't share </p>
      <WrappedComponent {...props}/>
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);



const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? 'Logged in as Brandon' : 'Login'}
      <WrappedComponent {...props}/>
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info='There are the details' /> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} /> , document.getElementById('app'));
