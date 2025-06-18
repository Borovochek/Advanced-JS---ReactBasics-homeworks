const { rankingCharactersByHealth } = require('../app.js');


test('Ranking characters by health', () => {
    const characters = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    const result = rankingCharactersByHealth(characters);

    expect(result).toEqual(expected);
});

