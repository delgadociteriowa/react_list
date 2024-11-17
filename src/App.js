import React, { useState, useEffect } from 'react';
import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(10);
  const url = 'https://api.github.com/users?per_page=20';

  const showMore = () => {
    setUsersCount(usersCount + 5);
  };

  const showLess = () => {
    setUsersCount(usersCount - 5);
  };

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

  return (
    <>
      <h1>Users</h1>
      <Users users={users} usersCount={usersCount} />
      {usersCount === 20 ? null : <button onClick={showMore}>More</button>}
      {usersCount === 0 ? null : <button onClick={showLess}>Less</button>}
    </>
  );
};

export default App;
