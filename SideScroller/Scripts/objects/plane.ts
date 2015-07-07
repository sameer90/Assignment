/// <reference path="../managers/asset.ts" />
module objects {
    // Plane Class
    export class Plane {
        image: createjs.Sprite;
        player: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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
        update() {
            this.image.x = this.stage.mouseY;
        }
        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }
} 