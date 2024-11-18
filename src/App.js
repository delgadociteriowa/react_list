import React, { useEffect, useRef } from 'react';
import Users from './components/Users';
import UsersControls from './components/UsersControls';
import UserState from './context/user/UserState';

const App = () => {
  const timerRef = useRef(null);
  const inactivityTime = 20000;

  const resetTimer = () => {
    // Cleans previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Starts new timer
    timerRef.current = setTimeout(() => {
      alert('You have been inactive for 20 seconds!');
    }, inactivityTime);
  };

  useEffect(() => {
    // Resets timer on any interaction
    const handleUserActivity = () => resetTimer();

    // Interaction events
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    // Starts timer for the first time
    resetTimer();

    // Cleans events and timer on unmount
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  return (
    <>
      <UserState>
        <h1>Users</h1>
        <Users />
        <UsersControls />
      </UserState>
    </>
  );
};

export default App;
