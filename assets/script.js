//creating variable for the timer text
var timeEl = document.querySelector("#timer");
//creating variable to place the timer text
var timerMainEl = document.getElementById("timerMain");

var startButton = document.querySelector("#start");

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

//this is going to switch to the questions
function switchFunc(){
  
}

//function where timer is appended to All Done! function
function endMessage() {
    timeEl.textContent = " ";
}

startButton.addEventListener("click", startGame);
