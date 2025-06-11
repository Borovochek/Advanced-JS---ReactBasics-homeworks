const Game = require('./game');

const { 
  GameSavingData, 
  readGameSaving: loadGame, 
  writeGameSaving: saveGame 
} = require('./game');

const game = new Game();
game.start();
 