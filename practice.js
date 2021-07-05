var firebaseConfig = {
    apiKey: "AIzaSyC-ohUrwLpphccwYzVzLmDojKnkRMCrcV8",
    authDomain: "kwitter-webapp-50933.firebaseapp.com",
    databaseURL: "https://kwitter-webapp-50933-default-rtdb.firebaseio.com",
    projectId: "kwitter-webapp-50933",
    storageBucket: "kwitter-webapp-50933.appspot.com",
    messagingSenderId: "286297207859",
    appId: "1:286297207859:web:e6033bf02892a0a2639f46",
    measurementId: "G-1BRE5VSLJ5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
  
  function add_user(){
      username=document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({purpose:"adding user"});
      
  }