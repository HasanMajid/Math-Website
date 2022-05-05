
var playing = false
var score

document.getElementById("startreset").onclick =
function(){
    
    if (playing){ //if we are playing
        location.reload(); //reloading our page
    }else{ //if we are not playing
        playing = true
        document.getElementById("startreset").innerHTML = "Reset"
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremaining").style.display = "block";
    }   
}