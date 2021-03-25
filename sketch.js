//Create variables here
var dog,dog1,dog2,database,foods
function preload()
{
	dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(width/2,height/2,20,20)
  dog.addImage(dog1)
  dog.scale=0.15
  var foodstockref =database.ref("food")
  foodstockref.on("value",readstock,showerror)
}


function draw() {  
background(46,139,87)
fill("white")
textSize(20)
text ("foodremaining:"+foods,150,150)
if (keyDown(UP_ARROW)){
  writestock(foods)
  dog.addImage(dog2)
}
  drawSprites();
  //add styles here

}
function writestock(x){
if(x<=0){
  x=0
}
else {
  x=x-1
}
database.ref("/").set({
  food:x
})
}
function readstock(data){
  foods=data.val()
}
function showerror (){
  console.log("error")
}

