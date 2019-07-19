import {
  DELETE_USER_CONTACT,
  FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, MAKE_USER_FAVORITE, POST_USER_CONTACT,
} from '../actions/ActionTypes';

const initialState = {
  users: null,
  failure: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state };
    case FETCH_USER_SUCCESS: {
      if (state.users) {
        return { ...state };
      }
      return { ...state, users: action.payload };
    }
    case FETCH_USER_FAILURE:
      return { ...state, failure: action.failure };
    case MAKE_USER_FAVORITE: {
      const updatedUsers = [...state.users];
      for (let i = 0; i < updatedUsers.length; i++) {
        const curretUser = updatedUsers[i];
        if (curretUser.id === action.id) {
          updatedUsers[i] = { ...curretUser, isFavorite: !curretUser.isFavorite };
        }
      }
      return { ...state, users: [...updatedUsers] };
    }
    case POST_USER_CONTACT: {
      return { ...state, users: [...state.users, action.data] };
    }
    case DELETE_USER_CONTACT: {
      const usersDelete = [...state.users];
      usersDelete.splice(action.id, 1);
      return { ...state, users: usersDelete };
    }
    default:
      return state;
  }
};

export default userReducer;
