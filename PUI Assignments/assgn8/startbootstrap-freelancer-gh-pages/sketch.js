//https://p5js.org/examples/input-easing.html cursor easing from here
let x = 1;
let y = 1;
let easing = 0.2;

function setup() {
  createCanvas(windowWidth, windowHeight);;
}

function draw() {
    background(255,255,255,100); //white

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    textSize(25);
    text("✐", x-17, y, 20);
    fill("grey");

}