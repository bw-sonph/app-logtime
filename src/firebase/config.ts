import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'dotenv/config';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIRE_BASE_API_KEY,
  authDomain: process.env.VUE_APP_FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRE_BASE_MESSAGING_SENDERID,
  appId: process.env.VUE_APP_FIRE_BASE_APP_ID,
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };
