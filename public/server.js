/*
server.js hosts all functions for rendering the game state and logging users in

Games info structure
                |-gamestate
                    |-keys:value
                |-GameName:name
                |-users
                    |-user1:uuid1
                    |-user2:uuid2
*/


/*********************************************************************************************/
const express = require('express');
const cors = require('cors')
const app = express();
var server = http.createServer(app);

var modal = document.getElementById('loginElement');

server.get("/hello",function(req,res){
    res.send("getting user data");
});

window.onclick = function(event){
    if(event.target = modal){
        modal.style.display = "none";
    }
}


let login = function(username){
    
}

let setValue = function(game,spot,spotVal){
    let spotRef = firebase.database().ref("games").child(game)
    .child("gameState")
    .child(spot);
    if(value=="o"||value=="x"){
        spotRef.set(spotVal);
    } else{
        spotRef.set(null);
    }
}
let renderGameState = function(game){
    let gameKeys = ["00","01","02","10","11","12","20","21","22"];
    gameKeys.map(key=>{
        if(game.hasOwnProperty(key)){
            let val = game[key];
            if(!!val){
                $(`[data-location='${key}']`).html(val);
            }
            else{
                $(`[data-location='${key}']`).html('.');
            }
        }else{
            $(`[data-location='${key}']`).html('.');
        }
    })
}

firebase.database.ref("games").on("value",function(snapshot){
    
});
var signIn = function(provider){
    firebase.auth().signInWithPopup(provider).then(function(result){
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        $("#authstuff").html(`<h1>Welcome ${user.displayName}</h1><p><img src="${user.photoURL}"></p>`);
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
}
$(".modal-content").on('submit',function(e){
    e.preventDefault();
    var data = $(".loginElement :input").arraySerialize();
    console.log(data);
    var uToken = signIn();
    return false;
});

document.getElementById('signIn').addEventListener('click',function(){
    signIn(new firebase.auth.GoogleAuthProvider());
});      

server.listen(6400,function(){
    console.log("listening on port 64000");
});


