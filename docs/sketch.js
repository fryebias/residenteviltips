let img;
function preload(){
  img = loadImage('remake.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  background(220);
   textSize(30);
  text('Resident Evil Tip #:0930',35,80);
  image(img,95,120,200,150);
  textSize(20);
  text('"Shoot it in the head to shoot it dead"',40,305);
  textSize(15);
  text('Downed zombies can rise after a certain amount of time', 15,330);
  text('Aim for the head, or set it on fire after its been downed. ',20,350)
}