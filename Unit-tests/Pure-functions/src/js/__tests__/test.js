const { characterHealthChanges } = require('../app.js');


test('returns "healthy" when health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    const result = characterHealthChanges(character);
    console.log(result);
    expect(result).toBe('healthy');
});

test('returns "wounded" when health between 15 and 50', () => {
    const character = { name: 'Маг', health: 50 };
    const result = characterHealthChanges(character);
    expect(result).toBe('wounded');
});

test('returns "wounded" when health between 15 and 50', () => {
    const character = { name: 'Маг', health: 45 };
    const result = characterHealthChanges(character);
    expect(result).toBe('wounded');
});

test('returns "wounded" when health between 15 and 50', () => {
    const character = { name: 'Маг', health: 15 };
    const result = characterHealthChanges(character);
    expect(result).toBe('wounded');
});

test('returns "critical" when health < 15', () => {
    const character = { name: 'Маг', health: 10 };
    const result = characterHealthChanges(character);
    expect(result).toBe('critical');
});

test('undefined when health is null', () => {
    const character = { name: 'Маг', health: null };
    const result = characterHealthChanges(character);
    expect(characterHealthChanges({ health: null })).toBeUndefined();
});
test('undefined when health is numeric string', () => {
    const character = { name: 'Маг', health: "50" };
    const result = characterHealthChanges(character);
    expect(characterHealthChanges({ health: '50' })).toBeUndefined();
});

