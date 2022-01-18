var firebaseConfig = {
      apiKey: "AIzaSyAYZfEtz_gpvg1utKVrK2Kyj5nesmx29UM",
      authDomain: "kaavyachat-app.firebaseapp.com",
      databaseURL: "https://kaavyachat-app-default-rtdb.firebaseio.com",
      projectId: "kaavyachat-app",
      storageBucket: "kaavyachat-app.appspot.com",
      messagingSenderId: "315523748131",
      appId: "1:315523748131:web:c7ab4ff4795780a507bc96"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
