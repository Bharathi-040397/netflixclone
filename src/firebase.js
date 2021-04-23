import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCTp07SN5UfN-VuDEk61ac1oQ7dz5THfuc",
    authDomain: "netflixclone-ea83d.firebaseapp.com",
    projectId: "netflixclone-ea83d",
    storageBucket: "netflixclone-ea83d.appspot.com",
    messagingSenderId: "151468561345",
    appId: "1:151468561345:web:ba953357dc71b16c569540",
    measurementId: "G-WPFDKC29ML"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db