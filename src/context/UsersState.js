import React, { useState, useEffect } from 'react';
import usersContext from './UsersContext';

const UsersState = (props) => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(10);
  const url = 'https://api.github.com/users?per_page=20';

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetch(url);
        console.log(data);
        if (!data.ok) {
          console.log('Data Error');
        }
        const fetchUsers = await data.json();
        setUsers(fetchUsers);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const showMore = () => {
    setUsersCount(usersCount + 5);
  };

  const showLess = () => {
    setUsersCount(usersCount - 5);
  };

  return (
    <usersContext.Provider value={{ users, usersCount, showMore, showLess }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersState;
