let canvas = document.getElementById('canvas');
canvas.width = 10000;
canvas.height = 10000;
let ctx = canvas.getContext('2d');
let h = window.innerHeight;
let l = window.innerWidth;
let centreH = h/2;
let centreL = l/2;



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
        x: e.clientX - centreL,
        y: e.clientY - centreH
    }
})
