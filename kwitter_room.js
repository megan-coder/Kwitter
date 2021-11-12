const firebaseConfig = {
      apiKey: "AIzaSyA2ohVrnJKxiV8_S2AdMvcSFYRiX7jS-KI",
      authDomain: "kwitter-563d8.firebaseapp.com",
      projectId: "kwitter-563d8",
      storageBucket: "kwitter-563d8.appspot.com",
      messagingSenderId: "181757069996",
      appId: "1:181757069996:web:008ec54c4e95645e6eed09"
    };
    
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem(user_name);
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names+" onclick = 'redirecttoRoomName(this.id)'> #"+Room_names+" + </div> <hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = kwitter_page.html;
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"; 
}