import Router from 'next/router';
import Cookie from 'js-cookie';
import api from '../settings/axios.settings';

import {TOKEN_KEY} from '../constants/token.constants';

export const isAuthenticated = () => Cookie.get(TOKEN_KEY) !== (null || undefined);
export const getToken = () => Cookie.get(TOKEN_KEY);

/**
 * Login method
 * @param {string} identifier
 * @param {password} password
 * @returns Promise
 */
export const login = (identifier, password) => {
  console.log('[authentication.service]: signing in...', identifier, password);
  // prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return;
  }

  // HACK: authentication mock
  // return new Promise((resolve) => {
  //   Cookie.set(TOKEN_KEY, 'asdfadfafa123412341234sdfasdf');
  //   resolve({data: true});
  //   Router.push('/');
  // });

  return new Promise((resolve, reject) => {
    api
      .post('/auth/local/', {identifier, password})
      .then((res) => {
        // set token response from Strapi for server validation
        Cookie.set(TOKEN_KEY, res.data.jwt);

        // resolve the promise to set loading to false in login form
        resolve(res);
      })
      .catch((err) => {
        // reject the promise and pass the error object back to the form
        reject(err);
      });
  });
};

/**
 * Register method
 * @param {string} username
 * @param {string} identifier
 * @param {password} password
 * @returns Promise
 */
export const registerUser = (username, email, password) => {
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    api
      .post('/auth/local/register', { username, email, password })
      .then((res) => {
        //set token response from Strapi for server validation
        Cookie.set(TOKEN_KEY, res.data.jwt);

        //resolve the promise to set loading to false in SignUp form
        resolve(res);
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

/**
 * Authorize method
 * @returns Promise
 */
export const authorize = () => {
  console.log('[authentication.service]: authorizing...');
  // prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return;
  }

  return new Promise((resolve, reject) => {
    api
      .get(`/users/me`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = () => new Promise((resolve) => resolve(Cookie.remove('co3in.auth.local.token')));
