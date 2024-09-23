var xBat = 0.4, yBat = 0.9, wBat = 0.3, hBat = 0.02;
var xBall = 0.4, yBall = 0.02, rBall = 0.04, xDir = 1, yDir = 1, speed = 0.01;
var balance = 1000, stake = 100;
var quit = false;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

document.getElementById("setStakeButton").addEventListener("click", toggleStakeDrawer);
document.getElementById("confirmStakeButton").addEventListener("click", setStake);
document.getElementById("stopBettingButton").addEventListener("click", stopBetting);

canvas.addEventListener("mousemove", function(ev) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = ev.clientX - rect.left;
    xBat = (mouseX / rect.width) - wBat / 2;
});

function toggleStakeDrawer() {
    document.getElementById("stakeDrawer").classList.toggle("active");
}

function setStake() {
    stake = parseInt(document.getElementById("stakeInput").value);
    document.getElementById("stakeDrawer").classList.remove("active");
}

function stopBetting() {
    quit = true;
}

function drawBat() {
    ctx.fillStyle = "white";
    ctx.fillRect(xBat * canvas.width, yBat * canvas.height, wBat * canvas.width, hBat * canvas.height);
}

function drawBall() {
    var burstChance = Math.random();
    if (burstChance < 0.001) {
        app.ShowPopup("Ball Burst! You lose the stake.");
        balance -= stake;
        quit = true;
    }

    yBall += speed * yDir;
    xBall += 0.005 * xDir;

    if (yBall > 1) {
        balance -= stake;
        app.ShowPopup("You missed!");
        quit = true;
    } else if (yBall < 0.02) {
        yDir = 1;
    }

    ctx.fillStyle = "#56AEF2";
    ctx.beginPath();
    ctx.arc(xBall * canvas.width, yBall * canvas.height, rBall * canvas.width, 0, Math.PI * 2);
    ctx.fill();
}

function gameLoop() {
    if (!quit) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBat();
        drawBall();
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();
  
