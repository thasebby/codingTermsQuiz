//creating variable for the timer text
var timeEl = document.querySelector("#timer");
//creating variable to place the timer text
var timerMainEl = document.getElementById("timerMain");
//sets variable for start button
var startButton = document.querySelector("#start");
//sets the display properties for the starting prompt and the button
var startDiv = document.getElementById("startBtn");
startDiv.style.display = "block";
//sets the display properties for the questions
var currentDisplay = document.getElementById("question"); 
currentDisplay.style.display = "none";

var rightCounter = 0;
var wrongCounter = 0;
var isWin = false;
var timerInterval;
var secondsLeft;
var currentQuestion = 0;

//making an array of different questions and their answers
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Tag Markup Language", "Hyperlinks Text Mark Language", "Hypertext Markup Language", "Hyper Text Marking Language"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What is the command to pull the most recent version of the project you're working on from Github?",
        options: ["git pull","pull most recent","get main", "git pull origin main"],
        answer: "git pull origin main"
    },
    {
        question: "What does CSS stand for?" ,
        options: ["Cascading Style Sheets", "Coding Style Sheet", "Can Successfully Style", "Code So Sick"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the file that contains all of the preliminary information of a project?",
        options: ["info.md","README.md","README.js","READ.me"],
        answer: "README.md"
    },
    {
        question: "What is the programming language that is commonly used to create interactive effects within web browsers?",
        options: ["HTML","CSS","JavaScript","C++"],
        answer:"JavaScript"
    }
];

//This function adds event listeners to all the buttons
function addEventListeners(){
    var buttons = document.querySelectorAll('#answers button');

    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            checkAnswer(button);
        });
    });
}
document.addEventListener("DOMContentLoaded", addEventListeners);

//This function will compare the picked answer to the key
function checkAnswer(selectedOption){
    const selectedAnswer=selectedOption.textContent;
    const correctAnswer=quizQuestions[currentQuestion].answer;

    if(selectedAnswer === correctAnswer){
        currentQuestion++;
            if(currentQuestion < quizQuestions.length){
                displayQuestion();
            }
            else{
                console.log("congrats");
            }
    }
    else{
        console.log("that's wrong");
        currentQuestion++;
            if(currentQuestion < quizQuestions.length){
                displayQuestion();
            }
            else{
                console.log("congrats");
            }
    }
}

//this function allows the questions to cycle through
function displayQuestion(){
    const questionEl = document.getElementById("questions");
    const answersEl = document.getElementById("answers");

    questionEl.textContent = quizQuestions[currentQuestion].question;

    answersEl.innerHTML = " ";
    quizQuestions[currentQuestion].options.forEach(option=>{
        const liEl = document.createElement("button");
        liEl.textContent = option;
        liEl.onclick = function(){
            checkAnswer(this);
        };
        answersEl.appendChild(liEl);
    });
}

displayQuestion();

function startGame(){
    isWin = false;
    secondsLeft = 75;
    //starts the timer
    setTime();
    switchFunc();

}

//runs the times
function setTime(){
    //sets the timer
    timerInterval = setInterval(function() {
        secondsLeft--;

        timeEl.textContent = "Time: " + secondsLeft;

        //necessary so timer does not go on forever
        if(secondsLeft >= 0){
            if(isWin && secondsLeft > 0){

            clearInterval(timerInterval);
            winGame();
            
            }
        }
            //if the answer is answered wrong then 15 seconds are substracted

            //All done! function 
           if(secondsLeft === 0){
            clearInterval(timerInterval);
            endMessage();
           }
        

    }, 1000);
}

//makes the questions appear for the quiz and makes the starting prompt disappear
function switchFunc(){
    if(currentDisplay.style.display === "none"){
        currentDisplay.style.display = "block";
    }

    if(startDiv.style.display ==="block"){
        startDiv.style.display = "none"
    }
}

//function where timer is appended to All Done! function
function endMessage() {
    timeEl.textContent = " ";
}

//event listener that starts once the start button is clicked
startButton.addEventListener("click", startGame);
