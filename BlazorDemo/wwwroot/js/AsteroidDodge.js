window.BlazorDemo = {
    doSomething: function () {
        alert("I did something!");
    },

    drawShip: function (element, x, y) {
        var ctx = element.getContext("2d");
        ctx.clearRect(0, 0, 200, 100);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 10, y + 20);
        ctx.lineTo(x + 10, y + 20);
        ctx.lineTo(x, y);
        ctx.stroke();
    },
    drawMissle: function (element, x, y) {
        var ctx = element.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 6, y);
        ctx.lineTo(x + 6, y + 10);
        ctx.lineTo(x, y + 10);
        ctx.lineTo(x, y);
        ctx.stroke();
    },
    drawExplosion: function (element, x, y, radius) {
        var ctx = element.getContext("2d");
        ctx.beginPath();
        for (i = 1; i < 20; i++) {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            var color = 'rgb(' + r + ',' + g + ',' + b + ')';
            console.log(color);
            ctx.fillStyle = color;
            var dx = Math.floor((Math.random() * 30) + (x - 15));
            var dy = Math.floor((Math.random() * 30) + (y - 15));
            ctx.fillRect(dx, dy, 2, 2);
        }
        ctx.fillStyle = "rgb(0,0,0)";
    },
    drawAsteroid: function (element, x, y, r) {
        var ctx = element.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    },
    drawDead: function (element) {
        var ctx = element.getContext("2d");
        ctx.clearRect(0, 0, 200, 100);
        ctx.font = '24px serif';
        ctx.strokeText('U DEAD', 40, 40);
        ctx.strokeText('Game Over', 40, 70);
    },
    drawStart: function (element) {
        var ctx = element.getContext("2d");
        ctx.clearRect(0, 0, 200, 100);
        ctx.font = '20px serif';
        ctx.strokeText('Press Enter to Start', 25, 60);
    },
    updateScore: function (element, score) {
        element.innerHTML = score;

    },



    onKeyDown: function (theKey) {
        DotNet.invokeMethodAsync('BlazorDemo', 'HandleKeyPress', theKey);
    }



};



document.onkeydown = function (evt) {
    evt = evt || window.event;
    window.BlazorDemo.onKeyDown(evt.key);
};