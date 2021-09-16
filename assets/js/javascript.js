
var startbtnEl = document.getElementById ('start-btn');
var timerEl = document.getElementById ('timer');
let questionQuiz = document.querySelector('#question-quiz');
var quizForm = document.querySelector("#quiz-form");
var quizinfo =document.querySelector('#quizInfo');
var answer = document.querySelector('#answercontainer');
var results = document.querySelector('#result');
var body=document.body;
var score = 0;
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
    

 function showquestions1(event){
        event.preventDefault();
        quizinfo.textContent="";
        startbtnEl.remove();
         questionQuiz.textContent= questions[0].q; 
         var optionA = document.createElement("button");
         optionA.textContent= answers[0].A;
         var optionB = document.createElement("button");
         optionB.textContent= answers[0].B;
         var optionC = document.createElement("button");
         optionC.textContent= answers[0].C;
         answer.appendChild(optionA);
         answer.appendChild(optionB);
         answer.appendChild(optionC);
         optionA.className="answer-btn";
         optionB.className="answer-btn";
         optionC.className="answer-btn";
         var result = document.createElement("h3");
         result.className= "result";
        result.textContent="Result";
        results.appendChild(result);
        var next=document.querySelector(".answer-btn");
        next.addEventListener("click", function(){
            result.textContent="Wrong";
             score++;
            console.log(score);
            answer.innerHTML = "";
          });
          next.addEventListener("click",  showquestions2);
    };
        
        

    function showquestions2(event){
        event.preventDefault();
        
         questionQuiz.textContent= questions[1].q; 
         var optionA = document.createElement("button");
         optionA.textContent= answers[1].A;
         var optionB = document.createElement("button");
         optionB.textContent= answers[1].B;
         var optionC = document.createElement("button");
         optionC.textContent= answers[1].C;
         answer.appendChild(optionA);
         answer.appendChild(optionB);
         answer.appendChild(optionC);
         optionA.className="answer-btn";
         optionB.className="answer-btn";
         optionC.className="answer-btn";
         var result = document.createElement("h3");
         body.appendChild(result);
         result.className= "result";
        result.textContent="Result";
        var next=document.querySelector(".answer-btn");
         next.addEventListener("click", function(){
            showquestions3;
            result.textContent="Wrong";
             score++;
            console.log(score);});
    };

    function showquestions3(event){
        event.preventDefault();
        answerscontainer.innerHTML = "";
        
         questionQuiz.textContent= questions[2].q; 
         var answerscontainer = document.createElement("div");
         body.appendChild(answerscontainer);
         var optionA = document.createElement("button");
         optionA.textContent= answers[2].A;
         var optionB = document.createElement("button");
         optionB.textContent= answers[2].B;
         var optionC = document.createElement("button");
         optionC.textContent= answers[2].C;
         answerscontainer.appendChild(optionA);
         answerscontainer.appendChild(optionB);
         answerscontainer.appendChild(optionC);
         optionA, optionB, optionC.className="answer-btn";
         var result = document.createElement("h3");
         body.appendChild(result);
         result.className= "result";
         result.textContent="Result";
        var next=document.querySelector(".answer-btn");
         next.addEventListener("click", function(){
            showquestions4;
            answer.remove();
            result.textContent="Wrong";
             score++;
            console.log(score);});
    };

    function showquestions4(event){
        event.preventDefault();
        quizinfo.textContent="";
        startbtnEl.remove();
         questionQuiz.textContent= questions[3].q; 
         var answerscontainer = document.createElement("div");
         body.appendChild(answerscontainer);
         var optionA = document.createElement("button");
         optionA.textContent= answers[3].A;
         var optionB = document.createElement("button");
         optionB.textContent= answers[3].B;
         var optionC = document.createElement("button");
         optionC.textContent= answers[3].C;
         answerscontainer.appendChild(optionA);
         answerscontainer.appendChild(optionB);
         answerscontainer.appendChild(optionC);
         optionA.className="answer-btn";
         optionB.className="answer-btn";
         optionC.className="answer-btn";
         var result = document.createElement("h3");
         body.appendChild(result);
         result.className= "result";
        result.textContent="Result";
        var next=document.querySelector(".answer-btn");
         next.addEventListener("click", function(){
            showquestions5;
            answerscontainer.innerHTML = "";
            result.textContent="Wrong";
             score++;
            console.log(score);});
    };

    function showquestions5(event){
        event.preventDefault();
        quizinfo.textContent="";
        startbtnEl.remove();
         questionQuiz.textContent= questions[4].q; 
         var answerscontainer = document.createElement("div");
         body.appendChild(answerscontainer);
         var optionA = document.createElement("button");
         optionA.textContent= answers[4].A;
         var optionB = document.createElement("button");
         optionB.textContent= answers[4].B;
         var optionC = document.createElement("button");
         optionC.textContent= answers[4].C;
         answerscontainer.appendChild(optionA);
         answerscontainer.appendChild(optionB);
         answerscontainer.appendChild(optionC);
         optionA.className="answer-btn";
         optionB.className="answer-btn";
         optionC.className="answer-btn";
         var result = document.createElement("h3");
         body.appendChild(result);
         result.className= "result";
        result.textContent="Result";
        var next=document.querySelector(".answer-btn");
         next.addEventListener("click", function(){
            showquestions2;
            answerscontainer.remove();
            result.textContent="Wrong";
             score++;
            console.log(score);});
    };


// function countdown() {
//     var timeLeft = 90;
  
//     var timeInterval = setInterval(function() {
      
//       timerEl.textContent = timeLeft + ' seconds left';
//       timeLeft--;
//       if(timeLeft === 0) {
//         clearInterval(timeInterval);
//       }}
//       //
//     },1000)



startbtnEl.addEventListener('click', showquestions1);
