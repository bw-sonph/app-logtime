import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';

// global styles
import './assets/main.css';

// import store
import { auth } from '@/firebase/config';
import store from '@/store/index';

let app: any;

auth.onAuthStateChanged((user) => {
  store.commit('setUser', user);
  store.commit('setAuthIsReady', true);

  if (!app) {
    app = createApp(App).use(router).use(store).mount('#app');
  }
});
