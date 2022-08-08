import * as types from './actionTypes';
import axios from 'axios';
import { get, post, postWithHeaders } from '../../configAxios';

export function loadSessionSuccess(session) { return {type: types.LOAD_SESSION_SUCCESS, session};}

export function createSessionSuccess(session) { return {type: types.CREATE_SESSION_SUCCESS, session};}
export function createSessionError() { return {type: types.CREATE_SESSION_FAIL}; }

export function updateSessionSuccess(session) { return {type: types.UPDATE_SESSION_SUCCESS, session};}
export function updateSessionError() { return {type: types.UPDATE_SESSION_FAIL}; }

export function deleteSessionSuccess(session) { return {type: types.DELETE_SESSION_SUCCESS, session};}
export function deleteSessionError() { return {type: types.DELETE_SESSION_FAIL}; }


// ====================================================

let csrfToken = '';

function buildSession(res) {
  if (csrfToken === '') {
    csrfToken = res.headers.xsrf_token;
  }
  const session = {
    userId: res.data.userId,
    username: res.data.username,
    email: res.data.email,
    name: res.data.name,
    avatar: res.data.avatar,
    isPrivate: res.data.isPrivate,
    csrfToken: csrfToken
  }
  return session;
}

export function loadSession() {
  return async function(dispatch) {
    try {
      const res = await axios(get('/api'))

      console.log(`Api message: ${res.data.message}`);

      const session = buildSession(res);

      dispatch(loadSessionSuccess(session));
    }
    catch(error) {
      console.log(`Error: ${error}`);
      throw error;
    }
  }
}

export function signUp(data, lang) {
  return async function(dispatch) {
    try {

      const headers = { 'Lang': lang }

      const res = await axios(postWithHeaders('/api/signup', data, headers));

      console.log(res.data.message);

      const session = buildSession(res);

      dispatch(createSessionSuccess(session));
    }
    catch (error) {
      dispatch(createSessionError(error.response));
      throw error.response;
    }
  }
}

export function logIn(data) {
  return async function(dispatch) {
    try {
      const res = await axios( post('/api/login', data));

      console.log(res.data.message);

      const session = buildSession(res);

      dispatch(createSessionSuccess(session));
    }
    catch (error) {
      dispatch(createSessionError(error.response));
      throw error.response;
    }
  }
}

export function logOut(data) {
  return async function(dispatch) {
    try {
      const res = await axios(post('/api/logout', data));

      console.log(res.data.message);

      const session = buildSession(res);

      dispatch(deleteSessionSuccess(session));
    }
    catch (error) {
      console.log(error.response);
      dispatch(deleteSessionError(error.response));
      throw error.response;;
    }
  }
}

export function updateEmail(data, headers) {

  return async function(dispatch) {
    try {
      const res = await axios(postWithHeaders(`/api/change-email`, data, headers));

      console.log(res.data.message);

      const session = buildSession(res);

      dispatch(updateSessionSuccess(session));
    }
    catch (error) {
      console.log(error);
      dispatch(updateSessionError());
      throw error.response;
    }
  }
}

export function updateUser(data, headers, userId) {

  return async function(dispatch) {
    try {
      const res = await axios(postWithHeaders(`/api/user/edit-profile/${userId}`, data, headers));

      console.log(res.data.message);

      const session = buildSession(res);

      dispatch(updateSessionSuccess(session));
    }
    catch (error) {
      console.log(error);
      dispatch(updateSessionError());
      throw error.response;
    }
  }
}
