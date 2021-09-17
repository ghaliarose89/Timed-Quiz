var showhighScore = document.getElementById("scoreinfo");

var backbtn = document.getElementById ("back-Btn");
var storedScores = localStorage.getItem("highscorearr");
storedScores = JSON.parse(highscorearr);

for (var i =0; i< highscorearr.length ;i ++){
    showhighScore.textContent= storedScores[i];
}



backbtn.addEventListener("click", function(){
    window.location.replace("./index-2.html");
})