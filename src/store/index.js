/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Vuex from 'vuex';
import { SessionStorage } from 'quasar';

import login from './login';
import showroom from './showroom';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      login,
      showroom,
    },

    state: {
      token: null,
      loggedUser: null,
    },

    mutations: {
      SAVE_LOGGED_USER(store, user) {
        SessionStorage.set('user', user);
        store.loggedUser = user;
      },
      SAVE_TOKEN(store, token) {
        SessionStorage.set('token', token);
        store.token = token;
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
