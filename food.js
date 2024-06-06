class Food {
  ////////////start food
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.eatSound = new Audio('/audios/eatsound.mp3'); //load sound
  }

  run() {
    this.render();
  }

  render() {
    // fill(this.clr);
    // rect(this.loc.x * cellSize, this.loc.y * cellSize, cellSize, cellSize);
    image(food1, this.loc.x * cellSize, this.loc.y * cellSize, cellSize, cellSize)
       //if snake coincides with food then get a new food location
    if (
      snake.segments[0].x === food.loc.x &&
      snake.segments[0].y === food.loc.y
    ) {
      food = new Food(floor(random(numCells)), floor(random(numCells)));
      snake.segments.push(createVector(0, 0));
      //add to score when the snake collides with the food
      score++;
      // document.getElementById("score").innerHTML = score;
      this.playEatSound(); // play sound when apple eaten
    }
  }

  playEatSound(){
    this.eatSound.play(); //play the sound when food is eaten
  }
} /////////////////////////////////////end food
