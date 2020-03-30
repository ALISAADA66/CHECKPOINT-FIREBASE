
  var firebaseConfig = {
    apiKey: "AIzaSyBfXe_5WjZMkYUNcoQDhqG2pxl3HZmBGBY",
    authDomain: "aliproject-e276d.firebaseapp.com",
    databaseURL: "https://aliproject-e276d.firebaseio.com",
    projectId: "aliproject-e276d",
    storageBucket: "aliproject-e276d.appspot.com",
    messagingSenderId: "138328054064",
    appId: "1:138328054064:web:56a88f9fed71f78c2bd0f5",
    measurementId: "G-N8HQC39KS7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var db = firebase.database().ref('Contact')


    $('#btnSubmit').click(function(){
        var name = $('#name').val()
        var email = $("#email").val()
        var tel = $("#phone").val()
        var track = $("#slct").val()

        var newMsg = db.push();
        newMsg.set({
            name:name,
            email:email,
            phone:tel,
            track:track,
        })
       
    })

