//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value" + like + " onclick='updatelike(this.id)'>";
                        span_with_tags = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span><button><hr>";

                        row = name_with_tag + message_with_tag + like_button + span_with_tags;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();