import React from 'react';
import Users from './components/Users';
import UsersControls from './components/UsersControls';
import UsersState from './context/UsersState';

const App = () => {
  return (
    <>
      <UsersState>
        <h1>Users</h1>
        <Users />
        <UsersControls />
      </UsersState>
    </>
  );
};

export default App;
