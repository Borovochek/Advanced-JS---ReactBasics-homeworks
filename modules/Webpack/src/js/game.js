const Character = require('./domain.js');

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

module.exports = Game;

// Добавление именованных экспортов (чтобы не перезаписать module.exports)
module.exports.GameSavingData = GameSavingData;
module.exports.readGameSaving = readGameSaving;
module.exports.writeGameSaving = writeGameSaving;