
// Standard P5.js function: Will be called one time on load
function setup() {

    // Create the canvas with provided width & height
    createCanvas(800, 800);

    // Set the background color of the canvas (default: RGB values)
    background(10, 5, 10);

  }

// Standard P5.js function: Will be called in a loop for 
// every new frame (unless deactivated via noLoop())
function draw() {

    // Reset the canvas with every new frame
    // Remove if you don't want to reset but 'pack' each frame on top of the last
    background(10, 5, 10);

    // Draw a white circle in the center of the canvas
    fill(255)
    circle(width/2, height/2, 200);

    // Draw a blue circle rotating around the center of the canvas
    translate(width/2, height/2)
    fill(0, 100, 255);
    let x = sin(frameCount/10)*width/4
    let y = cos(frameCount/10)*height/4
    circle(x, y, 200);

}

// Custom utils function
function keyPressed() {

    // Stop animation
    if (key == 'p') (isLooping()) ? noLoop() : loop();

    // Download canvas as png
    if (key == 's' || key == 'S') saveCanvas(canvas, 'creative-data-viz-p5js-workshop', 'png');
  }
  