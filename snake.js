class Snake {//////////// Start Snake
  //setting props and variables for snake
  constructor(x, y) {
    this.segments = [];
    this.dx = 0;
    this.dy = 0;
    let move = false;
    for (let i = 0; i < 4; i++) {
      this.clr = color(260, 20, 220);
      this.segments.push(createVector(x - i, y))
    }
this.crashSound = new Audio('./audios/glassshatter.mp3') //play crash sound

  }

  run() {
    //run the snake
    this.update();
    this.render();
  }

  update() {

//+++++++ while loop to make food to not land on snake (not finished)

    // do not let snake collide with itself 
    for (let i = 4; i < this.segments.length; i++) {
      if (this.segments[0].x === this.segments[i].x &&
        this.segments[0].y === this.segments[i].y) {
        gameState = 3;
      }
    }

    //updating snake position and check for food collision
    if (this.segments[0].x === food.loc.x && this.segments[0].y === food.loc.y) {

      //creating new food and adding a new segment to snake
      food = new Food(floor(random(numCells)), floor(random(numCells)));
      this.segments.push(createVector(0, 0));

      //add to score when a new segment game from colliding with the food
      score++;
      document.getElementById("score").innerText = score;
    }

    //updating the position of each segment in the snake
    this.segments[0].x += this.dx;
    this.segments[0].y += this.dy;

    //moving the segments
    for (let i = this.segments.length - 1; i > 0; i--) {
      this.segments[i].x = this.segments[i - 1].x;
      this.segments[i].y = this.segments[i - 1].y;
    }

    if (this.segments[0].x * cellSize > width) {// outside right
      gameState = 3;
      this.crashSound.play();
    }
    if (this.segments[0].y * cellSize < 0) {// outside top
      gameState = 3;
      this.crashSound.play();
    }
    if (this.segments[0].y * cellSize > height) {// outside bottom
      gameState = 3;
      this.crashSound.play();
    }
    if (this.segments[0].x * cellSize < 0) {// outside left
      gameState = 3;
      this.crashSound.play();
    }
  }

  //render the snake at the beginning
  render() {
    fill(this.clr);
    for (let i = 0; i < this.segments.length; i++) {
      rect(this.segments[i].x * cellSize, this.segments[i].y * cellSize, cellSize, cellSize)
    }
  }

}/////////////////////////////////////end snake