import { FIND_USER } from '../actions/ActionTypes';

const initialState = '';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_USER:
      return action.data
    default:
      return state;
  }
};
export default reducer;
