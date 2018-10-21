function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		contextoDaCanvas.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var background = new Sprite(0, 0, 600, 600),
	spritePersonagem = new Sprite(618, 16, 87, 87),
	
	perdeu = new Sprite(604, 446, 390, 350),
	jogar = new Sprite(603, 107, 390, 335),
	novo = new Sprite(37, 828, 443, 128),
	spriteRecord = new Sprite(23, 1000, 441, 95),
	spriteChao = new Sprite(0, 550, 600, 54),

	pontosPretosObstacle = new Sprite(688, 1000, 50, 120),
	terraObstacle = new Sprite(783, 1000, 50, 120),
	aguaObstacle = new Sprite(865, 1000, 50, 120),
	madeiraObstacle = new Sprite(956, 1000, 50, 120),
	vidroObstacle = new Sprite(1047, 1000, 50, 120);
