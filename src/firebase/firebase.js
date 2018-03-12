import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBoXJqc8xwDTzN_rNrih8kPeLdpyfr1DvY",
    authDomain: "expensify-27ac8.firebaseapp.com",
    databaseURL: "https://expensify-27ac8.firebaseio.com",
    projectId: "expensify-27ac8",
    storageBucket: "expensify-27ac8.appspot.com",
    messagingSenderId: "799209623857"
  };
  
  firebase.initializeApp(config);