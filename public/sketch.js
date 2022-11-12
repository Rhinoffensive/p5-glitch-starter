let socket;
let address = 'http://localhost'

function setup() {
  createCanvas(windowWidth, windowHeight);
  // get lower dimension of window
  let dim_min = min(windowWidth, windowHeight);
  let dim_max = max(windowWidth, windowHeight);



  background(128);
  img.resize(dim_min, dim_min);


  
  image(img, windowWidth/2- dim_min/2, windowHeight/2- dim_min/2);

  socket = io();
  socket.on('mouse', incomingMouse);
}

let img;
function preload() {
  img = loadImage('assets/bg-i.png');
}

function deviceTurned() {
  console.log('deviceTurned');
  
}


function draw() {
  // background(100);
  // translate(width/2, height/2);
  // rotate(frameCount/10%TWO_PI)
  // circle(20, 0, 40);
}

function incomingMouse(data) {
  fill(255);
  circle(data.x, data.y, 20);
  // console.log(data);
}

function mouseDragged() {
  let data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
