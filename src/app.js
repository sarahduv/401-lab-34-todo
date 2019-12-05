import React from 'react';

import ToDo from './components/todo/todo.js';
import Auth from './components/auth/auth.js';
import Login from './components//auth/login.js';
import LoginWrapper from './components/auth/login.js';
import If from './components/auth/if.js';
import LoginContext from './components/auth/context.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        {/* <LoginWrapper>
          <Login />
          <hr />
          <Auth capability="update">
            <button>Edit Something</button>
          </Auth>
          <Auth capability="delete">
            <button>Delete Something</button>
          </Auth>
          <Auth capability="read">
            <button>Read Something</button>
          </Auth>
          <Auth capability="create">
            <button>Create Something</button>
          </Auth>
        </LoginWrapper> */}
        <ToDo />
      </>
    );
  }
}
