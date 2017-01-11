//Instantiates a new Phase Game object with a resolution of 800x600, using Phase.auto as a renderer (ues openGL first, if that fails it falls back to canvas), 
//sets the div to bind to to game. Loads the preloader and create functions. 
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create });

var text;
var score = 0;
var counter = 0; 

function preload(){
	//This preloads all of the assets that we will need for our game. 
	//Loads an image that we will call bubble1 from the directory listed in the 2nd parameter. 
	game.load.image('bubble1', 'assets/pics/bubble.svg');

}

function create(){
	//Creates a variable called bubble1 and sets it equal to the preloaded image bubble1 and places it in the center of our game. 
	var bubble1 = game.add.sprite(game.world.centerX, game.world.centerY, 'bubble1');

	//Enables input for the bubble such as clicks etc. 
	bubble1.inputEnabled = true; 

	//Adds a text field dto the div called text in our html. This is where the score will show. 
	text = game.add.text(250, 16, 'text', { fill: '#ffffff' });

	bubble1.events.onInputDown.add(increment, this);
}

function increment(){
	counter++;
	text.text = "You clicked the bubble "+counter+" times!";
}