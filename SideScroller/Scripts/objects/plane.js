/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Plane = (function () {
        function Plane(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "heli");
            this.player = new createjs.Bitmap(managers.Assets.loader.getResult("heli"));
            this.player.y = 430;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.player.regX = this.width / 2;
            this.player.regY = this.height / 2;
            game.addChild(this.player);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Plane.prototype.update = function () {
            this.image.x = this.stage.mouseY;
        };
        Plane.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Plane;
    })();
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map