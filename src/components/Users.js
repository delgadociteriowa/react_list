import React, { useContext } from 'react';
import UserContext from '../context/user/userContext';

const Users = () => {
  const userContext = useContext(UserContext);
  const { users, usersCount } = userContext;
  return (
    <ul>
      {users.slice(0, usersCount).map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};

export default Users;
