var firebaseConfig = {
  apiKey: "AIzaSyAwcg9oP2LXxip7pxRHcLPPjrFeMNMwVqQ",
  authDomain: "kwitter-webapp-e0658.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-e0658-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-e0658",
  storageBucket: "kwitter-webapp-e0658.appspot.com",
  messagingSenderId: "1066785800918",
  appId: "1:1066785800918:web:84e836a6e025114263bf77",
  measurementId: "G-RXQL61SZDM"
};

firebase.initializeApp(firebaseConfig);


    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function add_room(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({purpose:"adding user"});
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
        function(snapshot) {document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("roomname"+Room_names);

        row="<div class='roomname' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
  });});}
getData();

function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("roomname",roomname);
        window.location="kwitter_page.html";
}
function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("roomname");
        window.location="kwitter_page.html";

}