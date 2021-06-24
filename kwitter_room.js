 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyD3Zb4_L78k4jnr7mLUJeOq50n2uU6SH24",
      authDomain: "kwitter-426ca.firebaseapp.com",
      databaseURL: "https://kwitter-426ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-426ca",
      storageBucket: "kwitter-426ca.appspot.com",
      messagingSenderId: "511129538395",
      appId: "1:511129538395:web:f1111173ec54881fdc947e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}