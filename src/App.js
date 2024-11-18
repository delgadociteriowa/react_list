import React from 'react';
import Users from './components/Users';
import UsersControls from './components/UsersControls';
import UserState from './context/user/UserState';

const App = () => {
  return (
    <>
      <UserState>
        <h1>Users</h1>
        <Users />
        <UsersControls />
      </UserState>
    </>
  );
};

export default App;
