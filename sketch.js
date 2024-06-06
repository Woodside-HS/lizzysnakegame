//declaring global variables
let cellSize;
let snake;
let food;
let numCells;
let gameOver = false;
let gameState;
let score;
let btnPlay, btnInst, btnAgain;
let showInst = false;
let image1, image2, image3, btn1, btn2, btn3, btn4, btn5, btn6, food1;
let playerName;
let count, time;
//load images
function preload(){
  //load background imgs
  image1 = loadImage('./imgs/forest.png')
  image2 = loadImage('./imgs/meadow.jpg')
  image3 = loadImage('./imgs/sadsnake.png')
  //load btn imgs
  btn1 = loadImage('./imgs/again.png')
  btn2 = loadImage('./imgs/again2.png')
  btn3 = loadImage('./imgs/inst.png')
  btn4 = loadImage('./imgs/inst2.png')
  btn5 = loadImage('./imgs/play.png')
  btn6 = loadImage('./imgs/play2.png')
  food1 = loadImage('/imgs/apple.png') //load image for apple


}
//draw canvas
function setup() {
  var cnv = createCanvas(870, 870);
  // cnv.position((windowWidth - width) / 0, 237);
 cd = document.getElementById("canvasDiv");
 cnv.parent(cd);
 createListeners();
initGame();
}

function initGame() {
  //draw grid on the canvas and other variables
  frameRate(10); // snake speed
  time = 0;
  count = 0;

  //draw grid        
  cellSize = 20;
  numCells = width / cellSize;

  //set how game starts
  gameState = 1;
  score = 0;

  //create snake and apple at random place
  snake = new Snake(floor(random(numCells)), floor(random(numCells)));
  food = new Food(floor(random(numCells)), floor(random(numCells)));

  //create buttons
  btnPlay = new Button("Play", createVector(100, 600), 150, 75, btn5);
  btnInst = new Button("Inst", createVector(500, 600), 150, 75, btn3);
  btnAgain = new Button("Again", createVector(300, 600), 150, 75, btn1);
}


function draw() {
  //setting the game state pages
  if (gameState === 1) {
    startGame();
  } else if (gameState === 2) {
    playGame();
  } else if (gameState === 3) {
    endGame();
  } else {
    console.log("incorrect game state");
  }
document.getElementById("scoreTile").innerText = score //Keeping score

}



function startGame() {
  background(image1);

  //drawing buttons
  // btnPlay.render();
  // btnInst.render();

  // snake game title
  fill(200, 10, 100);
  textSize(60);
  text("Snake Game", 210, 300);
  textStyle(BOLDITALIC);

  //the instructions when the instructions button is clicked on
  if (showInst) {
    fill(200, 10, 100);
    rect(100, 100, 600, 200);
    fill(0);
    textSize(25);
    text("Instructions", 325, 125);
    textSize(20);
    text("1. Press 'Play'.", 110, 140);
    text("2. Use the arrow keys to move the snake around.", 110, 170);
    text("3. Try to capture as many of the food items as you can.", 110, 200);
    text(
      "4. If your snake collides with the wall or itself, the game will stop.",
      110,
      230
    );
    text("5. You will then get your final score.", 110, 260);
    text("6. Press 'Again' to start the game over.", 110, 290);
  }
}

function playGame() {
  background(image2);
  //run snakes at this page
  snake.run();
  food.run();

  //keeping time
  count++;
if(count%10 === 0){
  time++
  document.getElementById("timeTile").innerText = time

}
}

//end game screen
function endGame() {
  gameState = 3;
  background(image3);
  let endMessage = getEndMessage();
  //show end message when player loses
  textSize(30);
  fill(255, 0, 150);
  text(endMessage, 100, 400);

  document.getElementById("rankTile").innerHTML = getRank();//getting rank


// rank function to get rank depending on score
function getRank(){
  let rank = "Bronze";

  if (score < 5) {
    rank = "Gold"; 
  } else if (score < 60) {
    rank = "Silver";
  } else if (score < 90) {
    rank = "Platinum";
  } else if (score < 120) {
    rank = "Diamond"; 
  } else if (score < 150) {
    rank = "Elite"; 
  } else if (score < 180) {
    rank = "Champion";
  } else if (score < 210) {
    rank = "Unreal";
  } 
return rank;

}

  // 20 end messages depending on the score

  function getEndMessage() {
    let msg = "";
    if (score < 5) {
      msg = "Wow! You suck at this. Your score was " + score;
    } else if (score < 10) {
      msg = "Don't quit your day job. Your score was " + score;
    } else if (score < 15) {
      msg = "You need more practice! Your score was " + score;
    } else if (score < 20) {
      msg = "Keep trying! Your score was " + score;
    } else if (score < 25) {
      msg = "Don't give up! Your score was " + score;
    } else if (score < 30) {
      msg = "Wow, you're getting good! Your score was " + score;
    } else if (score < 35) {
      msg = "It's okay, keep trying. Your score was " + score;
    } else if (score < 40) {
      msg = "Getting better! Your score was " + score;
    } else if (score < 45) {
      msg = "Wow practice is paying off! Your score was " + score;
    } else if (score < 50) {
      msg = "Woah high score! Your score was " + score;
    } else if (score < 55) {
      msg = "Look at that progress! Your score was " + score;
    } else if (score < 60) {
      msg = "Woah, getting the hang of it! Your score was " + score;
    } else if (score < 65) {
      msg = "Nice try! Your score was " + score;
    } else if (score < 70) {
      msg = "You're amazing! Your score was " + score;
    } else if (score < 75) {
      msg = "Super good! Your score was " + score;
    } else if (score < 80) {
      msg = "Wow! Your score is so high! Your score was " + score;
    } else if (score < 85) {
      msg = "Almost too good at this. Your score was " + score;
    } else if (score < 90) {
      msg = "Doing amazing, keep up the good work. Your score was " + score;
    } else if (score < 95) {
      msg = "So close to 100! Your score was " + score;
    } else if (score < 100) {
      msg = "Go touch grass. Your score was " + score;
    }
    return msg;
  }
  // btnAgain.render();

}

/////////////////////////////// listeners //////////////////////////////
function keyPressed() {
  //key controls
  if (keyCode === UP_ARROW) {
    snake.dx = 0;
    snake.dy = -1;
  } else if (keyCode === DOWN_ARROW) {
    snake.dx = 0;
    snake.dy = 1;
  } else if (keyCode === LEFT_ARROW) {
    snake.dx = -1;
    snake.dy = 0;
  } else if (keyCode === RIGHT_ARROW) {
    snake.dx = 1;
    snake.dy = 0;
  }
}

// function mouseMoved(event) {
//   if (btnPlay.mouseIsOver()) {
//     btnPlay.clr = color(50, 200, 150);
//     // btnPlay.img = loadImage('./imgs/play.png');
//   } else {
//     btnPlay.clr = color(0, 250, 150);
//     // btnPlay.img = loadImage('./imgs/play2.png');
//   }

//   if (btnInst.mouseIsOver()) {
//     btnInst.clr = color(20, 100, 150);
//     // btnInst.img = loadImage('./imgs/inst.png');
//   } else {
//     btnInst.clr = color(0, 150, 250);
//     // btnInst.img = loadImage('./imgs/inst2.png');
//   }

//   if (btnAgain.mouseIsOver()) {
//     btnAgain.clr = color(200, 50, 200);
//     // btnAgain.img = loadImage('./imgs/again.png');
//   } else {
//     btnAgain.clr = color(250, 20, 250);
//     // btnAgain.img = loadImage('./imgs/again2.png');
//   }
// }

// Canvas Listeners  when mouse is pressed, changes the game state screen
function mousePressed() {
  if (btnPlay.mouseIsOver()) {
    // btnPlay.clr = color(50, 200, 150);
    btnPlay.img = loadImage('./imgs/play.png');

    gameState = 2;
  } else {
    // btnPlay.clr = color(0, 250, 150);
    btnPlay.img = loadImage('./imgs/play2.png');

  }

  if (btnInst.mouseIsOver()) {
    // btnInst.clr = color(20, 100, 150);
    btnInst.img = loadImage('./imgs/inst.png');

    if (showInst === false) {
      showInst = true;
    } else {
      showInst = false;
    }
  } else {
    btnInst.img = loadImage('./imgs/inst2.png');
  }

  if (btnAgain.mouseIsOver()) {
    // btnAgain.clr = color(200, 50, 200);
    btnAgain.img = loadImage('./imgs/again.png');


    //resets the game so the score starts at 0 and the snake and food resets at initGame
    initGame();
    score = 0;
    document.getElementById("score").innerText = score;
  }
}



//  DOM Listeners
//Tiles connect to the buttons
//Once clicked, will go to certain game state
function createListeners(){
   let buttons = document.getElementsByClassName("btnDiv");
   for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
      if(i ===0){
        gameState = 2;
      }
      if(i === 1){
        showInst = !showInst;
      }
      if(i === 2){
        gameState = 1;
        initGame();
      }
     });
     buttons[i].addEventListener("mouseover", function(){
      buttons[i].setAttribute("style", "background-color:rgb(237, 98, 156)");

    });
    buttons[i].addEventListener("mouseout", function(){
     buttons[i].setAttribute("style", "background-color:rgb(244, 186, 215)");

     })
   }
 
}