var trex, trex_running;
//1 variaveis chao
//5variavel image  6 var invisivel
var ground, groundImage,invisibleGround;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //5 imagem animaçao
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,500,20);
 //4 add a imagem do solo
 ground.addImage("ground",groundImage);
 ground.x = ground.width /2;

}

function draw() {
  background(220);
 //2 velocidade do solo
 ground.velocityX = -4;
 console.log(ground.X);
 //9saber a posição atual do pulo
  //console.log(trex.y);


 // 6atividade do aluno crie um chao invisivel
 //8 ivisibilidade para o solo 
 invisibleGround = createSprite(200,190,400,10); 
 invisibleGround.visible = false; 
  //pular quando a tecla espaço for pressionada
  //10Use o operador && para verificar se as condições estão corretas:

 if(keyDown("space") && trex.y >= 100) {
  trex.velocityY = -10;
}   
  
  trex.velocityY = trex.velocityY + 0.9
  //3continua o chao 
  if (ground.x < 0) { 
    ground.x = ground.width / 2;
  }
 //7fazer collidir com o solo invisivel
trex.collide(invisibleGround);
 //impedir que o trex caia 
  // trex.collide(ground);
  drawSprites();
}
