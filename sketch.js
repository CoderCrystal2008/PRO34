//creates the database
var database;

//creates the variable for the dog
var dog, happyDog;

//creates the food supply
var foodStock, foodS;

//creates the variables for the dog images
var dogImg, happyDogImg;

function preload(){
  //loads the dog images
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/happyDogImg.png");
}

	


function setup() {
  createCanvas(500, 500);

  //assigns firebase database to the variable database
  database = firebase.database;

  //fetches food from database
  foodStock = database.ref("Fooed");
  foodStock.on("value",readStock);
  
  //creates the dog and adds the animation
  dog = createSprite(250,250,50,50);
  dog.addAnimation("dogImg",dogImg);
  
}


function draw() {  
  background(46,139,87);

  //feeds the dog
  if(keyDown === UP_ARROW){
    writeStock(foodS);
    dog.addImage(dogHappyImg);
  }
  drawSprites();
  //add styles here

}

//this function reads the value from the database
function readStock(data){
  foodS = data.val();
}

//this function writes the value from the database
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


