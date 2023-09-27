# PRO-C14-Group

1: console.log("trex" + trex.depth) e console.log("nuvem" + nuvem.depth)

2: nuvem.depth = trex.depth e trex.depth = trex.depth + 1

3: nuvem.lifetime = 250;

4: criar o gerarObstaculos();

5: if(frameCount % 60 === 0){
    var obstaculo = createSprite(600,165,10,40);
    obstaculo.velocityX = -6;}

6: preload: obs1 = loadImage('obstacle1.png');
  obs2 = loadImage('obstacle2.png');
  obs3 = loadImage('obstacle3.png');
  obs4 = loadImage('obstacle4.png');
  obs5 = loadImage('obstacle5.png');
  obs6 = loadImage('obstacle6.png');

  7: var rand = Math.round(random(1,6));
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


8: obstaculo.scale = 0.5;
    obstaculo.lifetime = 300;
