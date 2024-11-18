import React, { useContext } from 'react';
import Users from './components/Users';
import UsersState from './context/UsersState';
import UsersContext from './context/UsersContext';

const App = () => {
  const usersContext = useContext(UsersContext);
  const { usersCount, showMore, showLess } = usersContext;
  return (
    <>
      <UsersState>
        <h1>Users</h1>
        <Users />
        {usersCount === 20 ? null : <button onClick={showMore}>More</button>}
        {usersCount === 0 ? null : <button onClick={showLess}>Less</button>}
      </UsersState>
    </>
  );
};

export default App;
