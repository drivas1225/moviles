// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLmQO4WKfjXEzje5ak-EiurICu7xrqFNw",
    authDomain: "justdance-90af3.firebaseapp.com",
    databaseURL: "https://justdance-90af3.firebaseio.com",
    projectId: "justdance-90af3",
    storageBucket: "justdance-90af3.appspot.com",
    messagingSenderId: "1043099350729",
    appId: "1:1043099350729:web:69aa3145cee4af5ea67f18",
    measurementId: "G-EB70VH7P61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

database = firebase.database();
//numberRoom = 0;

//alert('numberRoom' +numberRoom);
var ref;

/////////////////////////////////////////////////////////////////////////////////////////
/*
+ getNroPlayers
+ getNameOfPlayers
+ getActualPoint
+ getActualScore
+ setStartGame
*/

function genNumberRoom(){
    numberRoom = Math.floor(Math.random() * 1000) + 1;
    console.log(numberRoom);
    ref =  database.ref('servidores/'+numberRoom);//.orderByKey(); 
    //alert(numberRoom);
    //document.getElementById("myNumberRoom").innerHTML = "Room ";
    $('#myNumberRoom').text('Room '+ numberRoom);
    
}

//Play Button onClick
$("#btnPlay").on("click", function(){
    var myVideo = document.getElementById("myvideo").play();
    if (TotalPlayers >0){ 
        var refT = database.ref('servidores/'+numberRoom);
        refT.update({
            Started: 1
        }); //child('Started').set(1);
    }
});


// NOT USED, WHY?
function createRoom(){
    var refT = database.ref('servidores');
    refT = refT.child(numberRoom);//('8653');
    refT.set({
        Started:0,
        nPlayers:0,
        players:{}
    });
}

//TODO: Falta testear
function getUserNamebyKey(keyUser, numUser){
    var refT = database.ref('users').child(keyUser).on('value',function(s){        
        var strName = s.val().username;        
        showNameUsers(numUser, strName,keyUser);
    });
}

/////// Start Get Total Players ///////
function setTotalPlayers(numTotalPlayers){
    TotalPlayers = numTotalPlayers;
}

function getTotalPlayers(){
    ref.child('nPlayers').on('value', function(snap){
        console.log('Total Players :'+snap.val());
        setTotalPlayers(snap.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    })
}
/////// End Get Total Players ///////


/* Function for testing */
function setData(pointNEW, userNumb){
    var ref2 = database.ref('servidores/' + numberRoom).set({
        Started:0,
        nPlayers:1,
        players:{
            "jadIdvt9CJRItdJP7s39n9akV6s1":{
                id:"jadIdvt9CJRItdJP7s39n9akV6s1",
                perfeccion: pointNEW,
                numPlayer: userNumb,
                puntaje: 200,
            }/*,
            "qbaG5PGnC1WVZf5Kk7vRFTzZsHC2":{
                id:"qbaG5PGnC1WVZf5Kk7vRFTzZsHC2",
                perfeccion: pointNEW,
                numPlayer: 2,
                puntaje: 200,
            }*/
        }


    });
}
/* Function for testing End */


function getParent ( snapshot ) { 
    // You can get the reference (A Firebase object) from a snapshot 
    // using .ref(). 
    var ref = snapshot .  ref (); 
    // Now simply find the parent and return the name. 
    return ref .  parent ().  name (); 
} 
  


function gotData(data){
   var scoreeee = data.val()
   //var keys = Object.keys(scoreeee);
   console.log("keys");
   //console.log(scoreeee);
   var i =0;
      
   data.forEach(function(d){       
       i+=1;
       var idPlayer = d.val().id;
       var actPoint = d.val().perfeccion;
       var numplayer = i;
       var scoreTotal = d.val().puntaje; 
       var keyUser =  d.ref.key;  
       /*ref.child('players/'+keyUser+'/puntaje').on('value',function(scoreTotal, keyUser){
            console.log('scoreTotal '+scoreTotal.val()+ 'keyUser: '+ scoreTotal.key.key );  //TODO FIX THIS KEY 
            showTotalScore(scoreTotal, keyUser); 
       }, error);*/
       console.log( actPoint+" - "+ i);     
       getUserNamebyKey(keyUser, numplayer, keyUser );             
       showTotalScore(scoreTotal, keyUser, actPoint); 
       //showImageActualPoint(actPoint, keyUser);  
   });
}

function error(err){
    console.log("error");
}

function blurEfect(){
    $('.bg-imag').blur();
}

//console.log(ref);
/// main ////
genNumberRoom();
createRoom();
getTotalPlayers();
ref.child('players').on('value', gotData, error);
console.log(numberRoom);
