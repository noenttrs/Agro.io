let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let player = {
    name: name,
    color: color,
    x: x,
    y: y,
    score: score,
    r: r,
    aim:{
        x: x,
        y: y
    }
}




function arc (obj) {
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


function loop () {
    
    
}
loop();

canvas.addEventListener('mousemove', e => {
    player.aim = {
        x: e.clientX - player.x,
        y: e.clientY - player.y
    }
})
