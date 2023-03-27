class protagonista{
    constructor(x = 0, y = 0, azimuth = 0, hp = 100,inventory = []){
	this.x = x;
	this.y = y;
	this.azimuth = azimuth;
	this.hp = hp;
	this.inventory = inventory;
	this.sprite = new Image();
	this.sprite.src = "src/sprites/Personajes/move without FX.png"
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

function keyDown(event){
    switch(event){
    case 87:
	
    }
}
function bigChungus(){
    ctx.drawImage(personaje.sprite, 10, 0, 35, 30, personaje.x, personaje.y, 50, 50)
}

function onStart(){
    console.log("pito")
    personaje = new protagonista()
    canvas = document.getElementById("viewport");
    ctx = canvas.getContext("2d");
    sexo = setInterval(bigChungus, 7)
    // window.onkeydown=keyDown;
    // window.onkeyup=keyUp;
}
