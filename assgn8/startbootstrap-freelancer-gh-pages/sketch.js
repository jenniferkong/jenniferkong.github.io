let x = 1;
let y = 1;
let easing = 0.05;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255,255,255,25); //white

    //background(0,0,0,25); //black
    //noStroke();
    //https://p5js.org/examples/input-easing.html
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
    // circle(x, y, 20);
    // line(mouseX, mouseY, mouseX, windowHeight);
    textSize(25);
    text("♥", x, y, 20);
    //https://cassietarakajian.com/current-projects/
    var xColor= map(mouseX, 0, 400, 0,255);
    var yColor = map(mouseY, 0, 400, 0,255);
    fill(0,xColor-150, yColor);

    print("p5 is running");
  // put drawing code here
}