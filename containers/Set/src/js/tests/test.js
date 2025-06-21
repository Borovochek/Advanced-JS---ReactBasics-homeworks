const Team = require('../app.js');

test('adding character to the team', () => {
    const team = new Team();
    const character = { name: 'маг', health: 100 };
    const result = team.add(character);
    expect(result).toBe(team);
});

test('adding same character to the team', () => {
    const team = new Team();
    const character = { name: 'маг', health: 100 };
    team.add(character);
    expect(() => team.add(character)).toThrow("Персонаж уже в команде");
});

test('adding all characters to the team', () => {
    const team = new Team();
    const character1 = { name: 'мечник', health: 10 };
    const character2 = { name: 'маг', health: 100 };
    const character3 = { name: 'лучник', health: 80 };

    const result = team.addAll(character1, character2, character3);
    expect(result).toEqual(team);
});

test('network to array conversion', () => {
    const team = new Team();
    const character1 = { name: 'мечник', health: 10 };
    const character2 = { name: 'маг', health: 100 };
    const character3 = { name: 'лучник', health: 80 };

    const result = team.addAll(character1, character2, character3);
    const ex = Array.of(character1, character2, character3);
    expect(result.toArray()).toEqual(ex);
});



