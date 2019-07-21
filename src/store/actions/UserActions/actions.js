import { NotificationManager } from 'react-notifications';
import { push } from 'connected-react-router';
import axios from '../../../contact-api';
import {
  DELETE_USER_CONTACT,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS, FIND_USER,
  MAKE_USER_FAVORITE, POST_USER_CONTACT,
} from '../ActionTypes';

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
);
export const findUser = data => (
  { type: FIND_USER, data }
);


export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUserRequest());
  axios.get('/users')
    .then((response) => {
      dispatch(fetchUserSuccess(response.data));
    })
    .catch(err => dispatch(fetchUserFailure(err)));
};

export const deleteUserContact = id => (dispatch) => {
  dispatch({ type: DELETE_USER_CONTACT, id });
  NotificationManager.warning('User Deleted');
  dispatch(push('/'));
};
export const postUserContact = data => (dispatch) => {
  dispatch({ type: POST_USER_CONTACT, data });
  NotificationManager.success('Success message', 'Posted User success');
  dispatch(push('/'));
};
