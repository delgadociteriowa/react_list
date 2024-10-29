import react, { useState } from 'react';

const App = () => {
  const baseUsers = [
    { id: '1', userName: 'user1' },
    { id: '2', userName: 'user2' },
    { id: '3', userName: 'user3' },
    { id: '4', userName: 'user4' },
    { id: '5', userName: 'user5' },
    { id: '6', userName: 'user6' },
    { id: '7', userName: 'user7' },
    { id: '8', userName: 'user8' },
    { id: '9', userName: 'user9' },
    { id: '10', userName: 'user10' },
    { id: '11', userName: 'user11' },
    { id: '12', userName: 'user12' },
    { id: '13', userName: 'user13' },
    { id: '14', userName: 'user14' },
    { id: '15', userName: 'user15' },
    { id: '16', userName: 'user16' },
    { id: '17', userName: 'user17' },
    { id: '18', userName: 'user18' },
    { id: '19', userName: 'user19' },
    { id: '20', userName: 'user20' },
  ];

  const [users, setUsers] = useState(baseUsers);
  const [limit, setLimit] = useState(10);
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.slice(0, limit).map((user) => (
          <li key={user.id}>{user.userName}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
