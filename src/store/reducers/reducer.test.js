import * as types from '../actions/ActionTypes';
import userReducer from './userReducer';

describe('Get user Reducer', () => {
  it('should return default state ', () => {
    const newState = userReducer(undefined, {});
    expect(newState).toEqual({
      users: null,
      failure: false,
    });
  });
  it('should return new state if recediving type', () => {
    const usersList = [
      { name: 'sobolev', phone: '0091823082130' },
      { name: 'sobolev', phone: '0091823082130' },
      { name: 'sobolev', phone: '0091823082130' },
      { name: 'sobolev', phone: '0091823082130' },
      { name: 'sobolev', phone: '0091823082130' }];
    const newState = userReducer({users:null}, {
      type: types.FETCH_USER_SUCCESS,
      user: usersList,
    });
    expect(newState).toEqual(usersList);
  });
});
