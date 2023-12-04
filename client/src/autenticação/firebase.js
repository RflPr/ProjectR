import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4NdgCvPZFS_P6MVR1_vCBmjBVzQB_NqM",
    authDomain: "appuser-27896.firebaseapp.com",
    databaseURL: "https://appuser-27896-default-rtdb.firebaseio.com",
    projectId: "appuser-27896",
    storageBucket: "appuser-27896.appspot.com",
    messagingSenderId: "480217702922",
    appId: "1:480217702922:web:82aec224836de55d7cf5f3",
    measurementId: "G-NFPF14T5Z0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

