
var startbtnEl = document.getElementById ('start-btn');
var timerEl = document.getElementById ('timer');
let questionQuiz = document.querySelector('#question-quiz');
var quizForm = document.querySelector("#quiz-form");
var quizinfo =document.querySelector('#quizInfo');
var answer = document.querySelector('#answercontainer');
var results = document.querySelector('#result');
var body=document.body;
var score = 0;
var questionNumber = 0;
var intervalSeconds = 90;
var intervalHold = 0;
var intervalPenalty = 10;
var answer1btn=document.getElementById('answer1');
var answer2btn=document.getElementById('answer2');
var answer3btn=document.getElementById('answer3');
var answer4btn=document.getElementById('answer4');
var initalInput= document.getElementById('inital');
var intialbtn=document.getElementById('initalbtn');
var highscorebtn=document.getElementById('highscroebtn');
var highscorearr= [];
var questions =
[
    {   q:"How do you call a function named myFunction?",
        correct: "myFunction()",
    },
    {   q:"How to write an IF statement for executing some code if i is NOT equal to 5?",
        correct:  "if (i!=5)",
    },   
    {   q:"How does a WHILE loop start?",
        correct:  "while (i<=10)",
    },

    {   q: "How can you add a comment in a JavaScript?",
        correct: "// This is a comment",
    },
    {   q: "What is the correct way to write a JavaScript array?",
        correct:"var colors = ['red','green', 'blue']",
    },
];
var answers = [
    {
        "A": "call function myFunction()",
        "B":  "call myFunction()",
        "C": "myFunction()",
        "D": "MYFUNCTION()",
    },

    {   "A": "if i =!5 then",
        "B": "if (i!=5)",
        "C": "if i <> 5" ,
        "D": "if (i <> 5) ",

    },

    {   "A": "while i = 1",
        "B": "while i = 1 to 10 ",
        "C": "while (i<=10)" ,
        "D": "While.Starter (i=1)",


    },  

    {
        "A": "comment: this is a comment",
        "B": "// This is a comment",
        "C": "<!-- This is a comment -->",
        "D": "This is a comment  ",
    },

    {
        "A": "var colors = 'red','green', 'blue' ",
        "B": "var colors = ['red','green', 'blue']",
        "C": "var colors = 1 = ('red'), 2= ('green'), 3 = ('blue')",
        "D": "var colors = (1:'red', 2:'green' 3: 'blur')",
    },
    ]
    
    answer1btn.style.display='none';
    answer2btn.style.display='none';
    answer3btn.style.display='none';
    answer4btn.style.display='none';
    initalInput.style.display='none';
    intialbtn.style.display='none';
    highscorebtn.style.display='none';



 function showquestion(){
        
        quizinfo.textContent="";
        startbtnEl.remove();
        answer1btn.style.display='';
        answer2btn.style.display='';
        answer3btn.style.display='';
        answer4btn.style.display='';

        console.log("questionNumber= "+ questionNumber);
        questionQuiz.textContent= questions[questionNumber].q; 
        answer1btn.textContent= answers[questionNumber].A;
        answer2btn.textContent= answers[questionNumber].B;
        answer3btn.textContent= answers[questionNumber].C;
        answer4btn.textContent= answers[questionNumber].D;
        answer1btn.addEventListener("click",function(event){
            event.preventDefault();
            var x = event.target.innerText;
            checkAnswer(x);
        });
        answer2btn.addEventListener("click",function(event){
            event.preventDefault();
            var x = event.target.innerText;
            checkAnswer(x);
        });
        answer3btn.addEventListener("click",function(event){
            event.preventDefault();
            var x = event.target.innerText;
            checkAnswer(x);
        });
        answer4btn.addEventListener("click",function(event){
            event.preventDefault();
            var x = event.target.innerText;  
            checkAnswer(x);
        });
    
        
    };

function checkAnswer(y){
        console.log(y);
           //using if statement to check the correct answer
         if (y === questions[questionNumber].correct){
            results.textContent="Correct!";
            score++;
            questionNumber++;
         }

        else{
        
            questionNumber++;
            intervalSeconds = intervalSeconds - 5;
            results.textContent="Wrong!";
         }

        if (questionNumber >= questions.length){
            quizOver();
        }
        else {
            
            showquestion();
        }

       
};

 function quizOver(){
    answer1btn.style.display='none';
    answer2btn.style.display='none';
    answer3btn.style.display='none';
    answer4btn.style.display='none';
    initalInput.style.display='';
    intialbtn.style.display='';
    highscorebtn.style.display='';
    intervalSeconds = 0;
    results.textContent="";
    questionQuiz.textContent= "Quiz is Over!  your score is " + score + "out of "+ questions.length;
    intialbtn.textContent = 'Enter Inital';
    intialbtn.addEventListener('click',highScore());
    highscorebtn.textContent = 'High Score';
    
};

function highScore(){

    highscorearr.push(initalInput.textContent);
    localStorage.setItem ('highscorearr',JSON.stringify(highscorearr));

}
    
startbtnEl.addEventListener('click', function(event){
    event.preventDefault();
    showquestion();
    if (intervalHold === 0) {
        intervalHold = setInterval(function () {
            intervalSeconds--;
            timerEl.textContent = "Time: " + intervalSeconds;
             if (intervalSeconds <= 0) {
                clearInterval(intervalHold);
                timerEl.textContent = "Time's up!";
                quizOver();
            }
        }, 1000);
    }
   
}
);
