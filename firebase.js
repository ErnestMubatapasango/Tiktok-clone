import   firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAFTtkE5i77UO3Xbhh8EhKaXtZRIbm_efw",
  authDomain: "tiktok-clone-tawanda.firebaseapp.com",
  databaseURL: "https://tiktok-clone-tawanda.firebaseio.com",
  projectId: "tiktok-clone-tawanda",
  storageBucket: "tiktok-clone-tawanda.appspot.com",
  messagingSenderId: "352538624581",
  appId: "1:352538624581:web:6bc4310d099854ce48192c",
  measurementId: "G-LYJP07F46E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;