/*
Script.js hosts all functions for rendering the game state and logging users in

Games info structure
                |-gamestate
                    |-keys:value
                |-GameName:name
                |-users
                    |-user1:uuid1
                    |-user2:uuid2
*/


/*********************************************************************************************/

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