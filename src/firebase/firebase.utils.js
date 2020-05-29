import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDj4nRtFqouSvd__m7PYk3VQ-LZMTXH020',
  authDomain: 'crwm-db-49d04.firebaseapp.com',
  databaseURL: 'https://crwm-db-49d04.firebaseio.com',
  projectId: 'crwm-db-49d04',
  storageBucket: 'crwm-db-49d04.appspot.com',
  messagingSenderId: '78650695198',
  appId: '1:78650695198:web:474db580ba5c7a89e0d80f',
  measurementId: 'G-YR7V5ZE6S2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;