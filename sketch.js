const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall
var wall2
var wall3
var base
var bridge
var stone=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  base=new Base(200,200,60,40);

  Matter.Composite.add(Bridge.body,jointPoint);
  jointLink= new Link(bridge.jointPoint);

  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

}
