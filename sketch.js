//Variáveis
var trex, trexCorrendo;
var chao, chaoImg, chaoInvisivel; 
var canvas;
var gravidade = 1.5; //y positivo é para baixo
var forcaPulo = -16; //y é para cima
var nuvem, nuvemImg;
var obs1, obs2, obs3, obs4, obs5, obs6;

//carregar animações
function preload(){ 
  trexCorrendo = loadAnimation("t1.png","t3.png", "t4.png");
  chaoImg = loadImage('ground2.png');
  nuvemImg = loadImage('cloud.png');
  obs1 = loadImage('obstacle1.png');
  obs2 = loadImage('obstacle2.png');
  obs3 = loadImage('obstacle3.png');
  obs4 = loadImage('obstacle4.png');
  obs5 = loadImage('obstacle5.png');
  obs6 = loadImage('obstacle6.png');
}

function setup() {
  canvas = createCanvas(600, 200); //larg, alt
  canvas.center();

  //crie um sprite de trex
  trex = createSprite(50,150,20,50);
  trex.addAnimation("correndo", trexCorrendo);
  //adicione dimensão ao trex
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  chao = createSprite(300,170,600,20); //x, y,larg, alt
  chao.addImage("chao", chaoImg); 
  chao.velocityX = -6

  chaoInvisivel = createSprite(60,230)
  chaoInvisivel.visible = false

  
  
}

function draw() {// desenhar
  background(180); //fundo
  drawSprites(); //desenha os sprite
  //frameRate(50);
  //console.log(frameCount)
  var noChao = trex.collide(chaoInvisivel)
  
  if (keyDown("space") && noChao) { // E
    trex.velocityY = forcaPulo;
  }

  if(chao.x < 0){ //verifica se saiu da tela esquerda
    chao.x = chao.width/2; 
  }

  trex.velocityY += gravidade;

  //impedir que o trex caia (por conta da gravidade)
  trex.collide(chaoInvisivel);
  //console.log(frameCount)
  //var aleatorio = Math.round(random(1,100))
  //console.log(aleatorio)
  gerarNuvens();
  gerarObstaculos();
  
}

//gera um resultado igual a zero somente quando o frameCount é múltiplo de 60
//como 0, 60, 120, 180 etc..

//criando a função
function gerarNuvens(){
  if(frameCount % 60 === 0){
    nuvem = createSprite(650,50,40,10);
    nuvem.addImage('nuvem', nuvemImg)
    nuvem.velocityX = -3;
    nuvem.y = Math.round(random(30,100))

    nuvem.lifetime = 250;
    //fórmula: tempo = distancia/velocidade
    //meu caso: 600/3 = 200
    //acrescentei mais + porque criei a nuvem 50pixels a mais do 600 de largura

    nuvem.depth = trex.depth
    trex.depth = trex.depth + 1

    console.log("trex" + trex.depth)
    console.log("nuvem" + nuvem.depth) 

    //problema aqui é que os sprites criados a cada geração das nuvens
    //nao é destruido e é alocado a memoria do computador, para cada sprite que é gerado
  }
  
}

function gerarObstaculos(){
  if(frameCount % 60 === 0){
    var obstaculo = createSprite(600,165,10,40);
    obstaculo.velocityX = -6;

    var rand = Math.round(random(1,6));
    console.log(rand);
    switch(rand){
      case 1: obstaculo.addImage(obs1);
              break;
      case 2: obstaculo.addImage(obs2);
              break;
      case 3: obstaculo.addImage(obs3);
              break;
      case 4: obstaculo.addImage(obs4);
              break;   
      case 5: obstaculo.addImage(obs5);
              break; 
      case 6: obstaculo.addImage(obs6);
              break;
      default: break;    
    }
    obstaculo.scale = 0.5;
    obstaculo.lifetime = 300;

  }
}
