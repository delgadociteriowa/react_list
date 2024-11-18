import React, { useContext } from 'react';
import UserContext from '../context/user/userContext';

const UsersControls = () => {
  const userContext = useContext(UserContext);
  const { usersCount, showMore, showLess } = userContext;
  return (
    <>
      {usersCount === 20 ? null : <button onClick={showMore}>More</button>}
      {usersCount === 0 ? null : <button onClick={showLess}>Less</button>}
    </>
  );
};

export default UsersControls;
