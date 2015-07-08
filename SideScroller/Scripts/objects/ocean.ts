/// <reference path="../managers/asset.ts" />
module objects {
    // Ocean Class
    export class Ocean {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            this.dy = -4;
            game.addChild(this.image);
        }

        update() {
            this.image.x += this.dy;
            //alert(this.image.x);
            if (this.image.x <= -2060) {
                this.reset();
            }
        }

        reset() {
            this.image.x = -260;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}