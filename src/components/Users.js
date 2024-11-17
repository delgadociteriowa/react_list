import React from 'react';

const Users = ({ users, usersCount }) => {
  return (
    <ul>
      {users.slice(0, usersCount).map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};

export default Users;
