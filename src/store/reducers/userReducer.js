import {
  FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, MAKE_USER_FAVORITE,
} from '../actions/ActionTypes';

const initialState = {
  users: null,
  failure: null,
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
    default:
      return state;
  }
};

export default userReducer;
