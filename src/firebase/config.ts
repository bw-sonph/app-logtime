import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBc5fBm4fpm2moTUtnIetgTSTJBOJ8vy8E',
  authDomain: 'app-logtime-dev.firebaseapp.com',
  projectId: 'app-logtime-dev',
  storageBucket: 'app-logtime-dev.appspot.com',
  messagingSenderId: '103312053763',
  appId: '1:103312053763:web:edce09b0a53c677789e036',
};

// PRODUCT
// const firebaseConfig = {
//   apiKey: "AIzaSyA-vExrsishh14bY0W9mr1pCm4Km4RZzNQ",
//   authDomain: "app-logtime.firebaseapp.com",
//   projectId: "app-logtime",
//   storageBucket: "app-logtime.appspot.com",
//   messagingSenderId: "920397669193",
//   appId: "1:920397669193:web:3fe8821ccc5ff8e2fef098"
// };

// init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };
