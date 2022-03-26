import { createStore } from 'vuex';

// firebase imports
import { auth } from '@/firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit('setUser', res.user);
      } else {
        throw new Error('could not complete signup');
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit('setUser', res.user);
      } else {
        throw new Error('could not complete login');
      }
    },
    async logout(context) {
      await signOut(auth);
      context.commit('setUser', null);
    },
  },
});

// export the store
export default store;
