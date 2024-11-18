import React, { useContext, useRef } from 'react';
import UserContext from '../context/user/userContext';

const UsersControls = () => {
  const userContext = useContext(UserContext);
  const { usersCount, showMore, showLess } = userContext;

  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    buttonRef.current.style.fontWeight = 'bold';
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.fontWeight = 'normal';
  };
  return (
    <>
      {usersCount === 20 ? null : (
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={showMore}
        >
          More
        </button>
      )}
      {usersCount === 0 ? null : <button onClick={showLess}>Less</button>}
    </>
  );
};

export default UsersControls;
