let data, dataShuffled;
let margin = 100;

// Standard P5.js function: Will be called one time on load
function setup() {

  // Create the canvas with provided width & height
  createCanvas(1000, 1000);

  // Set the background color of the canvas (default: RGB values)
  background(10, 5, 10);

  // Define stroke width
  strokeWeight(2)

  // The data
  let share = 42;

  // create the data array with lenght of 100 inclduing share x 1 and the rest filled with 0
  data = Array(share).fill(1).concat(Array(100-share).fill(0));
  // Shuffel the data to get a random order of elements in the graphic
  dataShuffled = data
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

}

// Standard P5.js function: Will be called in a loop for 
// every new frame (unless deactivated via noLoop())
function draw() {
  // Set the animation step: how much change do you want per frame
  let step = frameCount / 100;

  let rows = 10;
  let cols = 10;

  // Reset the canvas with every new frame
  // Remove if you don't want to reset but 'pack' each frame on top of the last
  background(10, 5, 10);

  // Iterate over the rows and columns and draw a circle 
  // for each entry in the data array
  let dataIndex = 0;

  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {

      // Select the current entry from the data array
      let d = dataShuffled[dataIndex];
      // let d = data[dataIndex];

      // Calculate the x and y postion based on the current row and column
      let x = map(row, 0, rows - 1, margin, width-margin);
      let y = map(col, 0, cols - 1, margin, height-margin);

      // Adjust the diameter based on the data value
      let diameter = 80 + 25 * d;
      
      // Change styling depending on data value
      let customColor = color(190, 80, 255);
      if (d==0) { 
        stroke(customColor)

        noFill(); 
      } else {
        fill(customColor);
        stroke(10, 5, 10);
      }

      // Set stroke color
        // stroke(10, 5, 10);

      // Draw the actual circle
      circle(x, y, diameter)

      // Increment the data array index
      dataIndex++;
    }
  }

}

// Custom utils function
function keyPressed() {

  // Stop animation
  if (key == 'p') (isLooping()) ? noLoop() : loop();

  // Download canvas as png
  if (key == 's' || key == 'S') saveCanvas(canvas, 'creative-data-viz-p5js-workshop', 'png');
}
  