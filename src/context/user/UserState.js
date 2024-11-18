import React, { useEffect, useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { GET_USERS, SHOW_MORE, SHOW_LESS } from '../types';

const UserState = (props) => {
  const initialState = {
    users: [],
    usersCount: 10,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
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
        dispatch({ type: GET_USERS, payload: fetchUsers });
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const showMore = () => {
    dispatch({ type: SHOW_MORE, payload: state.usersCount + 5 });
  };

  const showLess = () => {
    dispatch({ type: SHOW_LESS, payload: state.usersCount - 5 });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        usersCount: state.usersCount,
        showMore,
        showLess,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
