//$(document).ready(function () {
    TotalPlayers = 0;
    dicKeys = {};
    
    function setUsers(numb){
        /*<li class="nav-item">
            <div style="color: white">
                <h4 class="nav-link" id="nameUser4">Player 4</h4>
                <div class="d-flex justify-content-center">
                    <div id="scP4" class="col my-auto">Score</div>
                    <div class="col imageContainerP4">
                        <img id="imgP4" width="150" src="TypePoints/null0.png" alt="">
                    </div>
                </div>
            </div>
        </li>*/
        if(dicKeys[numb] == undefined){         
            $('#allUsers').append('<li class="nav-item"><div style="color: white">  <h4 class="nav-link" id="nameUser'+numb+'">Player '+numb+'</h4><div class="d-flex justify-content-center"> <div id="scP'+numb+'" class="col my-auto">Score</div>  <div class="col imageContainerP4">  <img id="imgP'+numb+'" width="150" src="TypePoints/null0.png" alt=""> </div> </div> </div> </li>');
            dicKeys[numb] = 1;
            setTotalPlayers(Object.keys(dicKeys).length);
        }
    }

    /*document.getElementById("imgP1").style.animation = "fadeout 2s forwards";
    document.getElementById("imgP2").style.animation = "fadeout 2s forwards";
    document.getElementById("imgP3").style.animation = "fadeout 2s forwards";
    document.getElementById("imgP4").style.animation = "fadeout 2s forwards";*/
    /*$('#imgP1').cycle({
        fx: 'fade' //style of effect
    });*/

    function showImageActualPoint(typePoint, numPlayer ){
        console.log(numPlayer);
        if (typePoint == 1){
            $('#imgP'+numPlayer).attr('src','TypePoints/good2.png');
            $('#imgP'+numPlayer).fadeIn("slow");
            $('#imgP'+numPlayer).fadeOut("slow");
           
        }else if (typePoint == 2){
            $('#imgP'+numPlayer).attr('src','TypePoints/perfect1.png');   
            $('#imgP'+numPlayer).fadeIn("slow");
            $('#imgP'+numPlayer).fadeOut("slow");
        }else{
            $('#imgP'+numPlayer).attr('src','TypePoints/bad3.png');
            $('#imgP'+numPlayer).fadeIn("slow");
            $('#imgP'+numPlayer).fadeOut("slow");
        }
    }

    function showTotalScore(scoreTotal,numplayer, actPoint){        
        if($('#scP'+numplayer).text() != ('Score: '+scoreTotal) ) {
            console.log('si');
            showImageActualPoint(actPoint, numplayer); 
            $('#scP'+numplayer).text('Score: '+scoreTotal);
        }         
    }

    function showNameUsers(/*numUser,*/ nameUser, keyIdUser){
        $("#nameUser" + keyIdUser).text(nameUser);      
        //$("#nameUser"+numUser).text(nameUser);
        /*$("#nameUser"+numUser).attr('id','nameUser'+keyIdUser);
        $('#imgP'+numUser).attr('id','imgP'+keyIdUser);
        $('#scP'+numUser).attr('id','scP'+keyIdUser);*/
    }
    
    
    /*$('div.col.imageContainerP1').click(function () {            
        showImageActualPoint(1,'1');
    });   
    $('div.col.imageContainerP2').click(function () {            
        showImageActualPoint(3,'2');
    });   
    $('div.col.imageContainerP3').click(function () {            
        showImageActualPoint(2,'3');
    });   
    $('div.col.imageContainerP4').click(function () {            
        showImageActualPoint(1,'4');
    });                

});*/
