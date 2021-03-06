/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
        ocean.update();
        island.update();
        plane.update();
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }
        if (scoreboard.score / 1000 == 1 && scoreboard.score != constants.PREVIOUS_SCORE_OF_BONUS) {
            constants.PREVIOUS_SCORE_OF_BONUS = scoreboard.score;
            constants.BONUS_LIVES += 1;
            scoreboard.lives += 1;
        }
        collision.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);
        // Show Cursor
        stage.cursor = "none";
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count] = new objects.Cloud(stage, game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(plane, island, clouds, scoreboard);
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map