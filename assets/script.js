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
