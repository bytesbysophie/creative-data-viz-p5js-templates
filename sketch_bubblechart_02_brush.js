let data, maxValue, barX, barY, barHeight;
let margin = 300;

// Standard P5.js function: Will be called one time on load
function setup() {

    // Create the canvas with provided width & height
    createCanvas(1000, 1000);

    // Set the background color of the canvas (default: RGB values)
    background(10, 5, 10);

    // The data
    data = [
      {key: 'bar 1', value: 10},
      {key: 'bar 2', value: 20},
      {key: 'bar 3', value: 40},
      {key: 'bar 4', value: 50},
      {key: 'bar 5', value: 60},
    ]

    // Get the max value from the data array
    // We will need this later for calculating the length of the bars
    maxValue = max(data.map(d => d.value))
}

// Standard P5.js function: Will be called in a loop for 
// every new frame (unless deactivated via noLoop())
function draw() {
    // Calculate 
    let step = frameCount / 10;

    // Reset the canvas with every new frame
    // Remove if you don't want to reset but 'pack' each frame on top of the last
    // background(10, 5, 10);

    // Functions to caculate the radius that leads to an accurate area representation
    // We should not scale the radius linear with the data ()
    let scaleArea = d => map(d, 0, maxValue, 0, (width*50) ** 2 * PI)
    let scaleRadius = d => Math.sqrt(scaleArea(d)/PI)

    // For each entry in data draw a circle in the size corresponding to
    // the data value
    data.forEach((d, i) => {

      // Arrange the circles in a circle and move the position of each aggain in a smaller circle
      let x = map(sin(i*PI*2/data.length), -1, 1, margin, width-margin) + sin(step) * 100;
      let y = map(cos(i*PI*2/data.length), -1, 1, margin, height-margin) + cos(step) * 100;

      // Calclate the radius based on the data value
      let r = Math.sqrt(scaleRadius(d.value)/PI)
      
      // Draw the bar at the calculated position with the calcualted height
      circle(x, y, r*2)

    })
}

// Custom utils function
function keyPressed() {

    // Stop animation
    if (key == 'p') (isLooping()) ? noLoop() : loop();

    // Download canvas as png
    if (key == 's' || key == 'S') saveCanvas(canvas, 'creative-data-viz-p5js-workshop', 'png');
  }
  