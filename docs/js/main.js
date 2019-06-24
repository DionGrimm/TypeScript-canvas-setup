"use strict";
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.getElementById('cnvs');
        this.ctx = this.canvas.getContext("2d");
        this.gameLoop = function () {
            _this.ctx.clearRect(0, 0, _this.width, _this.height);
            _this.ctx.fillStyle = "black";
            _this.ctx.fillRect(0, 0, _this.width, _this.height);
            _this.player.update();
            _this.ctx.stroke();
            requestAnimationFrame(_this.gameLoop);
        };
        console.log("new game created!");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(600, this.height, this);
        requestAnimationFrame(this.gameLoop);
    }
    Game.prototype.collision = function (object, target) {
        if (object.x > target.x + 60 - object.width && object.x < target.x + target.width - 10 && object.y > target.y - object.height && object.y < target.y + target.height) {
            return true;
        }
        else {
            return false;
        }
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Player = (function () {
    function Player(x, y, game) {
        this.width = 50;
        this.height = 100;
        this.game = game;
        this.ctx = this.game.ctx;
        this.x = x;
        this.y = y;
    }
    Player.prototype.update = function () {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
    };
    return Player;
}());
//# sourceMappingURL=main.js.map