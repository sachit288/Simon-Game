var colors  = ["green", "red", "yellow", "blue"]

var gamePattern = []

var userClickedPattern = []

var level = 0

$("body").on("keydown", function(){
  game();
  $("h1").text("level " + level)
})

function game(){
  $("h1").text("level " + level)
  var randNumber = Math.floor(Math.random()*4);
  var randomChosenColor = colors[randNumber];
  $("." + randomChosenColor).fadeOut("fast").fadeIn("fast");
  var aud  = new Audio("sounds/"+ randomChosenColor +".mp3")
  aud.play()
  gamePattern.push(randomChosenColor);
  level = level + 1;
}

function checkAnswer(currentLevel){
var check = 1;
for (var i = 0; i < currentLevel; i++) {
  if (userClickedPattern[i] == gamePattern[i]) {
    check = check*1;
  } else {
    check = check*0;
  }
}
if (check == 1) {
  game()
} else {
  $("h1").text("game over ")
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over")
  }, 200)
  wrong.play()
  setTimeout(function(){
    startOver()
  }, 800)
}
}

  $(".btn").on("click", function(){
    var userInput = $(this).attr('id');
    animatePress(userInput)
    var aud  = new Audio("sounds/"+ userInput +".mp3")
    aud.play()
    userClickedPattern.push(userInput);
    if (userClickedPattern.length == level) {
    checkAnswer(level)
    userClickedPattern = []
    }
  })

function animatePress(color){
  $("#" + color).addClass("pressed")
  setTimeout(function(){
    $("#" + color).removeClass("pressed")
  }, 100)
}

function startOver(){
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  $("h1").text("Press any key to start over")
}

  var wrong = new Audio("sounds/wrong.mp3");
