import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDKFU8Y9DMrE9Ij08Tvxk0a-gnvBmJRxLY",
    authDomain: "chat-app-625d1.firebaseapp.com",
    databaseURL: "https://chat-app-625d1.firebaseio.com",
    projectId: "chat-app-625d1",
    storageBucket: "chat-app-625d1.appspot.com",
    messagingSenderId: "565667221671",
    appId: "1:565667221671:web:d6841c711eaba259664b82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;