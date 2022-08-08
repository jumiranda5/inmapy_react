import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case types.LOAD_SESSION_SUCCESS :
      return {...state, ...action.session};
    case types.CREATE_SESSION_SUCCESS :
      return action.session;
    case types.UPDATE_SESSION_SUCCESS :
      return action.session;
    case types.DELETE_SESSION_SUCCESS :
      return action.session;
    default:
      return state;
  }
}
