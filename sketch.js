const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ruadosbobos;
var parte9875654;
var a;
var b;
var c;
var d;
var e;
var f;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    parte9875654={
	isStatic:true,
	}
    ruadosbobos= Bodies.rectangle(600,580,1200,2,parte9875654);
    World.add(world, ruadosbobos);
	Engine.run(engine);
	a={
	restitution:0.5,
	friction:0.02,
	frictionAir:0,
	}
	b={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1,
	}
	c={
	restitution:0.01,
	friction:1,
	frictionAir:0.3,
	}
	d=Bodies.circle(220,10,10,a);
	World.add(world, d);

	e= Bodies.rectangle(110,50,10,10,b);
    World.add(world, e);
	f= Bodies.rectangle(350,50,10,10,c);
    World.add(world,f);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  rect(ruadosbobos.position.x,ruadosbobos.position.y,1200,2);
 ellipse(d.position.x,d.position.y,10,10); 
 rect(e.position.x,e.position.y,10,10);
 rect(f.position.x,f.position.y,10,10);
  drawSprites();
 
}



