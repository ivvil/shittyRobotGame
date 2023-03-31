class entity{
    constructor(x = 0, y = 0, azimuth = 0, hp = 100, sprite){
	this.x = x;
	this.y = y;
	this.azimuth = azimuth;
	this.hp = hp;
	this.sprite = new Image();
	this.sprite.src = sprite
    }
    move(deltaX, deltaY, deltaAzimuth){
	this.x += deltaX;
	this.y += deltaY;
	this.azimuth += deltaAzimuth;
    }
    deltaHp(deltaHp){
	this.hp += deltaHp;
    }
}

class protagonist extends entity{
    constructor(x = 0, y = 0, azimuth = 0, hp = 100,inventory = []){
	super(x, y, azimuth, hp);
	this.inventory = inventory;
	this.sprite = new Image();
	this.sprite.src = "src/sprites/Personajes/move without FX.png"
    }
}

speed = 5

function keyDown(event){
    ctx.clearRect(0, 0, canvas.width, canvas.height) // For now we clean the canvas before any player movement, this doesen't account for any other action that would need to update the canvas
    switch(event.keyCode){
    case 87:
	player.move(0, -speed, 0);
	break;
    case 83:
	player.move(0, speed, 0);
	break;
    case 65:
	player.move(-speed, 0, 0);
	break;
    case 68:
	player.move(speed, 0, 0);
	break;
    }
    
}
function bigChungus(){
    ctx.drawImage(player.sprite, 10, 0, 35, 30, player.x, player.y, 50, 50) // Start player on the top left
}

function onStart(){
    player = new protagonist()
    canvas = document.getElementById("viewport");
    ctx = canvas.getContext("2d");
    sexo = setInterval(bigChungus, 7)
    window.onkeydown=keyDown;
    // window.onkeyup=keyUp;
}
