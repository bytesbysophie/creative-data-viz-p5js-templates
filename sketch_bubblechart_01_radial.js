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
    let step = frameCount / 200;

    // Reset the canvas with every new frame
    // Remove if you don't want to reset but 'pack' each frame on top of the last
    // By setting the fourth value to below 255 we make the background transparent
    // so we still see something of the old frames for a while
    background(10, 5, 10, 10);

    // Move to the center of the canvas and rotate it with every frame
    translate(width/2, height/2)
    rotate(step * 10)

    // Functions to caculate the radius that leads to an accurate area representation
    // We should not scale the radius linear with the data ()
    let scaleArea = d => map(d, 0, maxValue, 0, (width * 50) ** 2 * PI)
    let scaleRadius = d => Math.sqrt(scaleArea(d)/PI)

    data.forEach((d, i) => {

      // Arrange the circles in a circle
      let x = sin(i*PI*2/data.length) * width/4;
      let y = cos(i*PI*2/data.length) * width/4;

      // Calclate the radius based on the data value
      let r = Math.sqrt(scaleRadius(d.value)/PI);
      
      // Draw a circle at the calulated position
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
  