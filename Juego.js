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
    constructor(x = 0, y = 0, azimuth = 0, hp = 100, movementSpeed = 10, inventory = []){
	super(x, y, azimuth, hp);
	this.movementSpeed = movementSpeed;
	this.inventory = inventory;
	this.sprite = new Image();
	this.sprite.src = "src/sprites/Personajes/move without FX.png"
    }
}

playerSpriteStatus = 0
intervalCtx = 0

function keyDown(event){

    switch(event.keyCode){
    case 87:
	player.move(0, -player.movementSpeed, 0);
	break;
    case 83:
	player.move(0, player.movementSpeed, 0);
	break;
    case 65:
	player.move(-player.movementSpeed, 0, 0);
	break;
    case 68:
	player.move(player.movementSpeed, 0, 0);
	break;
    }
    
}
function drawCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(player.sprite, 0, playerSpriteStatus * 22, 21, 22, player.x, player.y, 42, 44) // Start player on the top left
}

function doGlobalAnimationTick(value){
    if (value){
	if (intervalCtx == 0) {
	    intervalCtx = setInterval(globalAnimationTick, 500)
	} else {
	    console.log("Loop has already started")
	}
    } else {
	clearInterval(intervalCtx)
	intervalCtx = 0
    }
}

function globalAnimationTick(){
    // Player's animations
    if (playerSpriteStatus !== 7) {
	playerSpriteStatus++
    } else {
	playerSpriteStatus = 0
    }
    
}

function onStart(){
    player = new protagonist()
    canvas = document.getElementById("viewport");
    ctx = canvas.getContext("2d");
    setInterval(drawCanvas, 7)
    doGlobalAnimationTick(1)
    // setInterval(globalAnimationTick, 500)
    window.onkeydown=keyDown;
    // window.onkeyup=keyUp;
}
