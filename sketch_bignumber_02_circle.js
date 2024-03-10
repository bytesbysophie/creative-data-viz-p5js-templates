let n;
let margin = 100;

// Standard P5.js function: Will be called one time on load
function setup() {

    // Create the canvas with provided width & height
    createCanvas(800, 800);

    // Optional: Set the background color of the canvas (default: RGB values)
    background(10, 5, 10);

    // Optinal: Customize the styling of the shapes you want to draw
    fill(240, 100, 249); // fill color
    stroke(255); // stroke color
    strokeWeight(4); // stroke thickness

    // The data: a single integer number representing a count / precentage / ...
    n = 42
}

// Standard P5.js function: Will be called in a loop for 
// every new frame (unless deactivated via noLoop())
function draw() {

    // Reset the canvas with every new frame
    // Remove if you don't want to reset but 'pack' each frame on top of the last
    background(10, 5, 10);

    // Start painting at the center of the canvas instead of in the upper left corner
    translate(width/2, height/2)

    // Draw n shapes onto the canvas
    for(let i = 0; i <= n; i++){

      // For each shape, calculate a random position within the height and width of the canvas
      // Use the diameter and margin to make sure, the circles (in this case) don't touch the border if the canvas
      let diameter = 150;
      let angleIncrement = PI * 1.5 / n;
      let x = cos(i * angleIncrement) * width / 3;
      let y = sin(i * angleIncrement) * height / 3;

      circle(x, y, diameter);
    }

    // Deactivate animation
    // Otherwise each circle would be drawn at a new random position for every new screen
    noLoop()
}

// Custom utils function
function keyPressed() {

    // Stop animation
    if (key == 'p') (isLooping()) ? noLoop() : loop();

    // Download canvas as png
    if (key == 's' || key == 'S') saveCanvas(canvas, 'creative-data-viz-p5js-workshop', 'png');
  }
  