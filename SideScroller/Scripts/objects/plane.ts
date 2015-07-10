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
            this.image = new createjs.Sprite(managers.Assets.atlas, "plane");
            this.image.y = 400;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = 1;
            this.image.regY = 10;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        update() {
            this.image.y = this.stage.mouseY;
            this.image.x = this.stage.mouseX;
        }
        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }
} 