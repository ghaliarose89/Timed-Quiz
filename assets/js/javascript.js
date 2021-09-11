
var startbtnEl = document.getElementById ('start-btn');
var timerEl = document.getElementById ('timer');
var questions =
[
    {   q:"How do you call a function named myFunction?" },
    {   q:"How to write an IF statement for executing some code if i is NOT equal to 5?"},   
    {   q:"How does a WHILE loop start?"},
    {   q: "How can you add a comment in a JavaScript?" },
    {   q: "What is the correct way to write a JavaScript array?"},
];
var answers = [
    {
        "A": "call function myFunction()",
        "B":  "call myFunction()",
        "C": "myFunction()",
    },

    {   "A": "if i =!5 then",
        "B": "if (i!=5)",
        "C": "if i <> 5" ,
        "D": "if (i <> 5) ",

    },

    {   "A": "while i = 1",
        "B": "while i = 1 to 10 ",
        "C": "while (i<=10)" ,

    },

    {
        "A": "while (i <= 10; i++)",
        "B": "// This is a comment",
        "C": "<!-- This is a comment -->",
        "D": "This is a comment  ",
    },

    {
        "A": "var colos = 'red','green', 'blue' ",
        "B": "var colors = ['red','green', 'blue']",
        "C": "var colors = 1 = ('red'), 2= ('green'), 3 = ('blue')",
        "D": "var colors = (1:'red', 2:'green' 3: 'blur')",
    },


]

// function questions(){
//     for ()
// }

function countdown() {
    var timeLeft = 90;
  
    var timeInterval = setInterval(function() {
      
      timerEl.textContent = timeLeft + ' seconds left';
      timeLeft--;
      if(timeLeft === 0) {
        clearInterval(timeInterval);
      }
      //
    },1000);

}

startbtnEl.addEventListener('click', countdown());

