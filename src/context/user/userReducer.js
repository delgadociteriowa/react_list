import { GET_USERS, SHOW_MORE, SHOW_LESS } from '../types';

const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SHOW_MORE:
      return {
        ...state,
        usersCount: action.payload,
      };
    case SHOW_LESS:
      return {
        ...state,
        usersCount: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
