class drawable{
    constructor(x = 0, y = 0, hp = 100, sprite, spriteStatus,width, height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.hp = hp;
	this.sprite = new Image();
	this.sprite.src = sprite;
	this.spriteStatus = spriteStatus;
    }
    move(deltaX, deltaY){
	this.x += deltaX;
	this.y += deltaY;
    }
    deltaHp(deltaHp){
	this.hp += deltaHp;
    }
    draw(){
        ctx.drawImage(player.sprite, 0, playerSpriteStatus * 22, 21, 22, player.x, player.y, 42, 44);
    }
}

class entity extends drawable{
    constructor(x = 0, y = 0, hp = 100, movementSpeed = 10, inventory = [], azimuth){
	super(x, y, hp);
	this.movementSpeed = movementSpeed;
	this.inventory = inventory;
	this.sprite = new Image();
	this.sprite.src = "src/sprites/Personajes/move without FX.png"
	this.spriteStatus = 0;
	this.width = 21;
	this.height = 22;
	this.azimuth = azimuth;
    }
}

playerSpriteStatus = 0
intervalCtx = 0
rotAngle = 0

function rotDrawable(obj, alpha){
    xMed = obj.x + (obj.width / 2);
    yMed = obj.y + (obj.height / 2);

    ctx.translate(xMed, yMed); // Change frame of reference
    ctx.rotate(alpha)          // Rotate canvas arround drawable's axis 
    ctx.translate(-xMed, yMed);// Return frame of reference

    
    
}

function rotateDrawable(obj, alpha){

    ctx.translate(obj.x, obj.y);
    ctx.rotate(-alpha);
    ctx.translate(-obj.x, -obj.y);

    obj.draw();

    ctx.translate(obj.x, obj.y);
    ctx.rotate(alpha);
    ctx.translate(-obj.x, -obj.y)

}

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
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar el canvas antes de dibujar un nuevo frame
    // ctx.translate(player.x, player.y)
    player.draw()

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

function getMousePos(evt){
    area = canvas.getBoundingClientRect();
    player.azimuth = Math.atan2(evt.clientX - area.left, evt.clientY - area.top)
}

function onStart(){
    player = new protagonist()
    canvas = document.getElementById("viewport");
    spriteAngle = canvas.addEventListener("mousemove", function(evt){getMousePos(evt)}, false);
    ctx = canvas.getContext("2d");
    // ctx.rotate(45 * Math.PI / 180);
    setInterval(drawCanvas, 1000)
    doGlobalAnimationTick(1)
    // setInterval(globalAnimationTick, 500)
    window.onkeydown=keyDown;
    // window.onkeyup=keyUp;
}
