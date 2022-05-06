//if we click on the start/reset 
     //if we are playing 
        //reload page   
     //if we are not playing
        //show countdown box
        //reduce time by 1 sec
        
///The code I wrote
var options = []
var answer 
var started = false
var score = 0
var timer = 60
var time
document.getElementById("startreset").onclick = function(){
   if(started == false){
      started = true
      document.getElementById("startreset").innerHTML = "Reset"
      createQuestion()
      console.log("New game started");
      document.getElementById("timeRemainingValue").innerHTML = timer;
      document.getElementById("timeremaining").style.display = 'initial';

      time = window.setInterval(myTimer, 1000)

   }
   else{
      location.reload()
   }

}
function reset(){
   options = []
   started = false
   score = 0
}

function myTimer() {
   if(timer == 0){
      clearInterval(time)
      document.getElementById("gameOver").style.display = 'initial';
      document.getElementById("gameOver").innerHTML = "Game Over <br> Your Score is " + score;
   }
   else{
      timer -= 1
   }
   document.getElementById("timeRemainingValue").innerHTML = timer;
}

function createQuestion(){
   options = []
   var num1 = Math.floor((Math.random() * 10) + 1); //random number from 1-10
   var num2 = Math.floor((Math.random() * 10) + 1); //random number from 1-10
   var op = Math.floor((Math.random() * 2) + 1); //random number from 1-10 to pick a box to put the answer in
   if (op == 1){
      answer = num1 + num2
      document.getElementById("question").innerHTML = num1 + " + " + num2
   }
   else if(op == 2){
      answer = num1 - num2
      document.getElementById("question").innerHTML = num1 + " - " + num2
   }

   var answerBox = Math.floor((Math.random() * 4) + 1); //random number from 1-10
   addOption(answerBox,answer) // Puts answer in a random box
   for (let i = 1; i <= 4; i++){
      if(i != answerBox){
         var option = createAwnser(answer)
         
         addOption(i,option)
      }
   } 
}

function createAwnser(num){
   var out = Math.floor((Math.random() * 10) + 1); //random number from 1-10
   while (options.includes(out) || out == answer || options.includes(out)){
      out = Math.floor((Math.random() * 10) + 1); //random number from 1-10
   }
   options.push(out)
   return out
}

function addOption(box, option){
   document.getElementById("box"+box).innerHTML = option
}

function checkAnswer(input){
   if (Number(input) == answer){
      score += 5
      console.log("correct")
      document.getElementById("scorevalue").innerHTML = score
      createQuestion()
   }
}
//making pancakes