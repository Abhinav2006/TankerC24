// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world;
var tanker1, ground1;
var cannonImage;
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/
function preload(){
    cannonImage = loadImage("assets/Cannon.jpg");
}

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas (600,400);
    engine = Matter.Engine.create();
    world = engine.world
    ground1 = new Ground(400,20,200,380);
    tanker1 = new Tanker(100,340,100,100);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(192);
    tanker1.display();
    ground1.display();
}
