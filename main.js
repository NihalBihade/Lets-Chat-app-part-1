
const firebaseConfig = {
    apiKey: "AIzaSyBhSyKig2R8GtAyuL2wdSDzx_tDB_pve1Y",
    authDomain: "letschat-web-app---part-1.firebaseapp.com",
    projectId: "letschat-web-app---part-1",
    storageBucket: "letschat-web-app---part-1.appspot.com",
    messagingSenderId: "827865585365",
    appId: "1:827865585365:web:38d8086f856761a773745c",
    measurementId: "G-70M5NF34YG"
  };
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



