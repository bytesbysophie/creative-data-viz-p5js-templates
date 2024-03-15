let share;
let margin = 100;

// Standard P5.js function: Will be called one time on load
function setup() {

  // Create the canvas with provided width & height
  createCanvas(1000, 1000);

  // Set the background color of the canvas (default: RGB values)
  background(10, 5, 10);

  // The data (percentage)
  share = 42;

}

// Standard P5.js function: Will be called in a loop for 
// every new frame (unless deactivated via noLoop())
function draw() {
  // Set the animation step: how much change do you want per frame
  let step = frameCount / 50;

  // Reset the canvas with every new frame
  // Remove if you don't want to reset but 'pack' each frame on top of the last
  background(10, 5, 10);

  // Define the share basis: How many elements do you want to draw to show 100 %
  // Change to 10 for example
  let shareBasis = 100;

  // Calculate the share based on the defined base: How many elements should be highlighted
  let shareSmall = round(share/(100/shareBasis), 0);

  // How often should the pattern be repeated
  // If the shareBase is 100 and repetition is 2, this will result in 200 shapes drawn in total
  let repetition = 2;

  // Calcualte how many shape will be drawn in total
  let circlesTotal = shareBasis * repetition;
  for(let circleCount = 0; circleCount < circlesTotal; circleCount++){

    // Use Sinus / Cosinus and PI to calucalte the position of the circle
    let x = map(sin(circleCount/circlesTotal * PI * 1.9), -1, 1, margin, width-margin);
    let y = map(cos(circleCount/circlesTotal * PI * 1.9), -1, 1, margin, height-margin);

    // Define the size and color of the shape based on if it should be highlighted or not
    let diameter = circleCount%shareBasis < shareSmall ? 100 : 70;
    let colorA = color(205, 100, 255);
    let colorB = color(255, 255, 255);
    let fillColor = circleCount%shareBasis < shareSmall ? colorA : colorB;
    fill(fillColor);

    // Use push() and pop() to make cstyle and position changes fore one element at a time wihtout 
    // applying the changes to anything outside this section
    push()

    // Translate the 'brush' to the calculated xy position before rotating: 
    // This way the shape will be rotated at its center 
    translate(x, y);
    rotate(step);
    // Draw rectangle with rounded corner in center mode (center of the rect will be at x, y)
    rectMode(CENTER);
    rect(0, 0, diameter, diameter, diameter / 6);
    pop();

  }

}

// Custom utils function
function keyPressed() {

  // Stop animation
  if (key == 'p') (isLooping()) ? noLoop() : loop();

  // Download canvas as png
  if (key == 's' || key == 'S') saveCanvas(canvas, 'creative-data-viz-p5js-workshop', 'png');
}
  