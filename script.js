const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Bird object
let bird = {
    x: 100,
    y: canvas.height / 2,
    radius: 20,
    gravity: 0.6,
    velocity: 0,
    lift: -12,
    draw: function() {
        ctx.fillStyle = '#f7f74c';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    },
    update: function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
    },
    flap: function() {
        this.velocity = this.lift;
    }
};

// Event listener for flap
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        bird.flap();
    }
});

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bird.draw();
    bird.update();
    
    requestAnimationFrame(gameLoop);
}

gameLoop();
