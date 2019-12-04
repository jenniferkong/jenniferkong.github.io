let x = 1;
let y = 1;
let easing = 0.05;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(255,255,255,25);
}

function draw() {
    background(255,255,255,100); //white

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
    //text("✏️", x, y, 20);
    text("✐", mouseX-17, mouseY, 20);

    //https://cassietarakajian.com/current-projects/
    var xColor= map(mouseX, 0, mouseX, 0,225);
    var yColor = map(mouseY, 0, mouseY, 0,225);
    fill("gray");
    //fill(0, xColor, yColor);

}