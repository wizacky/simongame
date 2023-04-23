
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function playSound(color) {
    var audio = new Audio("sounds/" + color + (".mp3"));
    audio.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () { $("#" + currentColor).removeClass("pressed") }, 100);
}

var started=false;

$(document).keypress(function () {
    if (!started) {
        nextSequence();
        started = true;
    }
})
var level = 0;

function nextSequence() {
    level++;
    userClickedPattern = [];
    $("h1").html("Level " + level);
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
playSound(randomChosenColour);
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {if( gamePattern.length===userClickedPattern.length){
        setTimeout(function(){nextSequence()}, 100);
    }}
    else {$("h1").html("Game Over");
$("body").addClass("game-over");
setTimeout(function(){$("body").removeClass("game-over")},2000);
setTimeout(function(){$("h1").html("Press any key to restart")},2000);
$(document).keypress(
    startOver()
)



}
    
}
function startOver(){
    level=0;
    gamePattern=[];
    started= false;
}