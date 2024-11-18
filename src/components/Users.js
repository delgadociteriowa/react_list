import React, { useContext } from 'react';
import UsersContext from '../context/UsersContext';

const Users = () => {
  const usersContext = useContext(UsersContext);
  const { users, usersCount } = usersContext;
  return (
    <ul>
      {users.slice(0, usersCount).map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};

export default Users;
