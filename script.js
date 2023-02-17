let canvas = document.getElementById('canvas');
canvas.width = 10000;
canvas.height = 10000;
let ctx = canvas.getContext('2d');


function arc (obj) {
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r || 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


function loop () {
    
}
loop();

canvas.addEventListener('mousemove', e => {
    player.aim = {
        x: e.clientX,
        y: e.clientY
    }
})
