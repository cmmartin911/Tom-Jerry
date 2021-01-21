var tom, tomIMG, jerry, jerryIMG, garden, gardenIMG;

function preload() {
    //load the images here
    tomIMG = loadImage("tomOne.png");
    tomA = loadAnimation("tomTwo.png","tomThree.png");
    tomIMG2 = loadImage("tomFour.png");

    jerryIMG = loadImage("jerryOne.png");
    jerryA = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryIMG2 = loadImage("jerryFour.png");

    gardenIMG = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(400,400,1000,800);
    garden.addImage(gardenIMG);

    //create tom and jerry sprites here
    tom = createSprite(700,625,10,10);
    tom.addImage(tomIMG);
    tom.scale = 0.15;
    tom.setCollider("rectangle",0,0,900,400);
    
    jerry = createSprite(150,625,10,10);
    jerry.addImage(jerryIMG);
    jerry.scale = 0.1;
    jerry.setCollider("rectangle",0,0,400,400);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.velocityX = 0;
        tom.addAnimation("tend",tomIMG2);
        tom.changeAnimation("tend");

        jerry.addAnimation("jend",jerryIMG2);
        jerry.changeAnimation("jend");
    }

    keyWentDown();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -4;
        tom.addAnimation("running",tomA);
        tom.changeAnimation("running");

        jerry.addAnimation("teasing",jerryA);
        jerry.changeAnimation("teasing");
    }

}
