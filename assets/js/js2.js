var showhighScore = document.getElementById("scoreinfo");
var highscoreList;
var backbtn = document.getElementById ("back-Btn");


var storedScores = localStorage.getItem("highscorearr") || [];
storedScores = JSON.parse(storedScores);
console.log(storedScores);
for (var i = 0; i < storedScores.length; i++) {
        var liElement = document.createElement("li");
        liElement.textContent = storedScores[i].userInput + " " + storedScores[i].score;
        console.log(liElement)
        document.body.appendChild(liElement);
}
liElement.textContent="score";
showhighScore.textContent="hiahfkzgrf";
console.log("hi");
// backbtn.addEventListener("click", function(){
//     window.location.replace("./index-2.html");
// });