
const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

const rankingCharactersByHealth = (characters) => {
    characters.sort((a, b) => b.health - a.health);
    return characters;
}


module.exports = {
  rankingCharactersByHealth,
  characters
};
