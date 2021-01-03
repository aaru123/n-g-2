 
var fixedRect;
var total=0;
var body=[]

var xdir=0,ydir=0;
function preload()
{
  //app=loadImage("a1.png");
}


function setup() {
  frameRate(10)

  createCanvas(500,500);
  fixedRect = createVector(250, 250);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  
  body[0] = createVector(100,100);
  
 // body[1] = createVector(450,200);
  //body[0].shapeColor = "green";
 // body[0].debug = true;
  
}

function draw() {
  background("green");  

  
  if(keyCode===UP_ARROW)
  {
    move(0,-1);
   // body[0].velocityX=0;
    //body[0].velocityY=-2;
  }
  if(keyCode===LEFT_ARROW)
  {
    move(-1,0);
    //body[0].velocityX=-2
   // body[0].velocityY=0;
  }
  if(keyCode===RIGHT_ARROW)
  {
    move(1,0);
  //  body[0].velocityX=2
   // body[0].velocityY=0;
  }
  if(keyCode===DOWN_ARROW)
  {
    move(0,1);
    //body[0].velocityX=0
   // body[0].velocityY=2;
   
  }
  
  update();
//image(app,fixedRect.x,fixedRect.y,50,50)
  rect(fixedRect.x,fixedRect.y,40,40)
  if(fixedRect.x-body[0].x< 30 && fixedRect.y-body[0].y <30&& body[0].x-fixedRect.x< 30 && body[0].y-fixedRect.y<30)
  {
    console.log("hello")
    total++;
    fixedRect.x=floor(random(100,250))
    fixedRect.y=floor(random(100,250))
    grow()
    

  }
  if(end())
  {
  background("red");
  text("gameend",250,250);
}
 // console.log(total)

  for(i=0;i<body.length;i++)
  {
    fill("pink")
   // console.log(body[i])
   fill ("red")
    rect(body[i].x,body[i].y,20,20)
  }
 // drawSprites();
}
function move(a,b){
 // body[0].x+=a;
  //body[0].y+=b;
  xdir=a;
  ydir=b;
}
function grow()
{
  
 var head = createVector(body[body.length-1].x,body[body.length-1].y)
body.push(head);
console.log(body)
}

function end()
{
  if(body[body.length-1].x>=width || body[body.length-1].x<0 || body[body.length-1].y>=height 
    || body[body.length-1].y<0)
    return true;
}
function update()
{
  var head =  body[body.length-1].copy()
 //console.log(head.x)
// console.log(head.y)

body.shift();
//console.log(body.length)
head.x+=xdir*10;
head.y+=ydir*10;
body.push(head)
//console.log(body.length)
}