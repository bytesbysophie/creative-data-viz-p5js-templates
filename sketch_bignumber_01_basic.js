let n;
let margin = 100;

// Standard P5.js function: Will be called one time on load
function setup() {

    // Create the canvas with provided width & height
    createCanvas(800, 800);

    // Set the background color of the canvas (default: RGB values)
    background(10, 5, 10);

    // Optinal: Customize the styling of the shapes you want to draw
    fill(240, 100, 249); // fill color
    stroke(255); // stroke color
    strokeWeight(4); // stroke thickness

    // The data: a single integer number representing a count / precentage / ...
    n = 20
}

// Standard P5.js function: Will be called in a loop for 
// every new frame (unless deactivated via noLoop())
function draw() {

    // Reset the canvas with every new frame
    // Remove if you don't want to reset but 'pack' each frame on top of the last
    background(10, 5, 10);

    // Draw n shapes onto the canvas
    for(let i = 0; i <= n; i++){

      // For each shape, calculate a random position within the height and width of the canvas
      // Use the diameter and margin to make sure, the circles (in this case) don't touch the border if the canvas
      let diameter = 100;
      let x = random(diameter/2, width - diameter/2); 
      let y = random(diameter/2, height - diameter/2);

      // You can also add a margin if you want to have more space to the border of the canvas
      // let x = random(diameter/2 + margin, width - diameter/2 - margin); 
      // let y = random(diameter/2 + margin, height - diameter/2 - margin);

      circle(x, y, diameter)
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
  