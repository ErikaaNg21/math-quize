player1name=localStorage.getItem("player1_name")
player2name=localStorage.getItem("player2_name")
player1score=0
player2score=0
document.getElementById("player1_name").innerHTML=player1name
document.getElementById("player2_name").innerHTML=player2name
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("player_question").innerHTML="questonturn-"+player1name
document.getElementById("player_answer").innerHTML="answerturn-"+player2name
function send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    actual_answer=parseInt(number1) *parseInt(number2)
    questionnumber="<h4>"+number1+"X"+number2+"</h4>"
    inputbox="<br>answer:<input type='text'id='input_check_box'>"
    checkbutton="<br><br><button class='btn-info'onclick='check()'>check</button>"
    row=questionnumber+inputbox+checkbutton
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").innerHTML=""
    document.getElementById("number2").innerHTML=""
}
questionturn="player1"
   answerturn="player2"
   function check(){
       getanswer=document.getElementById("input_check_box").value
       
       if(getanswer==actual_answer){
           if(answerturn=="player1"){
               player1_score=player1_score+1
               document.getElementById("player1_score").innerHTML=player1_score
           }
           else{
               player2_score=player2_score+1
               document.getElementById("player2_score").innerHTML=player2_score
           }
       }
       if(questionturn=="player1"){
           questionturn="player2"
           document.getElementById("player_question").innerHTML="questoniturn-"+player2_name
       }
       else{
           questionturn="player1"
           document.getElementById("player_question").innerHTML="questionturn-"+player1_name

       }
       if(answerturn=="player1"){
           answerturn="player2"
           document.getElementById("player_answer").innerHTML="answerturn-"+player2_name
       }
       else{
           answerturn="player1"
           document.getElementById("player_answer").innerHTML="answerturn-"+player1_name
       }
   } 

