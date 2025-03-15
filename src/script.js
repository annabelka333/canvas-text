window.addEventListener('load',function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const text = 'Hello!';
    console.log(ctx);
    ctx.fillStyle = 'white';  
    ctx.strokeStyle = 'orandered';
    ctx.font = '80px Helvetica';
    ctx.fillText(text, 100, 150);
    ctx.strokeText(text, 100, 190);
});