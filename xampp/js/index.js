//$(document).ready(function () {
    TotalPlayers = 4;
    
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

    function showTotalScore(scoreTotal,numplayer){
        $('#scP'+numplayer).text('Score: '+scoreTotal);
    }

    function showNameUsers(numUser, nameUser, keyIdUser){
        //$(this).prev('li').prop('id', 'newId');
        $("#nameUser"+numUser).text(nameUser);
        $("#nameUser"+numUser).attr('id','nameUser'+keyIdUser);
        $('#imgP'+numUser).attr('id','imgP'+keyIdUser);
        $('#scP'+numUser).attr('id','scP'+keyIdUser);
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

