import { NotificationManager } from 'react-notifications';
import axios from '../../../contact-api';
import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, MAKE_USER_FAVORITE} from '../ActionTypes';

export const fetchUserRequest = () => (
  { type: FETCH_USER_REQUEST }
);
export const fetchUserSuccess = payload => (
  { type: FETCH_USER_SUCCESS, payload }
);
export const fetchUserFailure = failure => (
  { type: FETCH_USER_FAILURE, failure }
);
export const makeUserFavorite = id => (
  { type: MAKE_USER_FAVORITE, id }
)


export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUserRequest());
  axios.get('/users')
    .then((response) => {
      dispatch(fetchUserSuccess(response.data));
      NotificationManager.success('get users');
    })
    .catch(err => dispatch(fetchUserFailure(err)));
};
