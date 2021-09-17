var showhighScore = document.getElementById("scoreinfo");
var highscoreList;
var backbtn = document.getElementById ("back-Btn");

var storedScores = JSON.parse(localStorage.getItem("High-score")) ||  [];

for (var i = 0; i < storedScores.length; i++) {
    var showList = document.createElement("li");
        showhighScore.appendChild(showList);
        showList.className="li-list";
        showList.textContent = storedScores[i].userInput + " " + storedScores[i].score + "/ 5" ;
        console.log(storedScores);
}


// backbtn.addEventListener("click", function(){
//     window.location.replace("./index-2.html");
// });