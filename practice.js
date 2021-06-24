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

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "There are somethings you can't see like... the sea."
    });
}