$("#level-title").css("color", "black");
// alert("hello")
// ---------------------random number generator------------------
function randomNumGen(){
  var a = Math.floor(Math.random()*4);
  return a;
}


// ------------------color picker-------------------
function colorNum(a){
  var colors = ["green", "red", "yellow", "blue"];
  return (colors[a]);
}

// ------------------event listener-----------------
$(".btn").on("click", function(){
  alert("clicked")
})


$("body").on("keydown", function(){
  game();
  alert("body")
})

var gameSeq = [];

function game(){
  gameSeq.push(colorNum(randomNumGen()));
}


// for (var i = 0; i < 5; i++) {
//   game()
// }
// alert(gameSeq)



function flashButton(){
  for (var i = 0; i < gameSeq.length; i++) {


      $("." + gameSeq[i]).fadeOut("fast").fadeIn("fast");
      // gameSeq[i] + "Audio".play()


  }}
  flashButton()



var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");
