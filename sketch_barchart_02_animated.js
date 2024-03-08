let data, maxValue, barX, barY, barHeight;

// Standard P5.js function: Will be called one time on load
function setup() {

    // Create the canvas with provided width & height
    createCanvas(1000, 1000);

    // Set the background color of the canvas (default: RGB values)
    background(10, 5, 10);

    // The data
    data = [
      {key: 'bar 1', value: 10},
      {key: 'bar 2', value: 40},
      {key: 'bar 3', value: 20},
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
    let step = frameCount / 100;

    // Reset the canvas with every new frame
    // Remove if you don't want to reset but 'pack' each frame on top of the last
    background(10, 5, 10);

    // For each entry in data draw a rectange that represents 
    // the coreesponding value through its height
    data.forEach((d, i) => {

      margin = 400
      barWidth = 50 + 40 * sin(step);
      barMaxWidth = height-margin;
      barBorderRadius = barWidth/2;

      // Calculate the bar height: map the current value d.value to the height of the canvas
      // (substract the defined margin, so the bars don't touch the edges of the canvas)
      barHeight = map(d.value, 0, maxValue, 0, barMaxWidth);

      // Distrbute bars horizontaly: map the current index i to the width of the canvas
      // (substract the defined margin, so the bars don't touch the edges of the canvas)
      barX = map(i, 0, data.length-1, margin, width-margin);

      // Center all bars horizontally
      rectMode(CENTER)
      barY = height/2;

      // Draw the bar at the calculated position with the calcualted height
      push();
      translate(barX, barY);
      rotate(sin(step)*PI/2)
      rect(0, 0, barWidth, barHeight, barBorderRadius);
      pop();

    });
}

// Custom utils function
function keyPressed() {

    // Stop animation
    if (key == 'p') (isLooping()) ? noLoop() : loop();

    // Download canvas as png
    if (key == 's' || key == 'S') saveCanvas(canvas, 'creative-data-viz-p5js-workshop', 'png');
  }
  