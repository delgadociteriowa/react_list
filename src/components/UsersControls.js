import React, { useContext } from 'react';
import UsersContext from '../context/UsersContext';

const UsersControls = () => {
  const usersContext = useContext(UsersContext);
  const { usersCount, showMore, showLess } = usersContext;
  return (
    <>
      {usersCount === 20 ? null : <button onClick={showMore}>More</button>}
      {usersCount === 0 ? null : <button onClick={showLess}>Less</button>}
    </>
  );
};

export default UsersControls;
