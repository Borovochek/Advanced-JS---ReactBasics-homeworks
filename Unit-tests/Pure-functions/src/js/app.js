// Во время игры вам необходимо будет отображать полоску жизни над игровым персонажем. Для сигнализации пользователю 
// вы решили ввести цветовую индикацию:

// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.
// Описание
// Реализуйте функцию, которая на вход принимает объект вида:

// {name: 'Маг', health: 90}
// И возвращает ответ в виде одной из строк: healthy, wounded, critical

// Сгенерируйте проект на базе npm. Подключите туда jest и напишите авто-тесты, которые обеспечивают 100% покрытие вашей функции по строкам.

// Убедитесь, что вы обеспечили 100% покрытие тестами.

const character = { name: 'Маг', health: null };
const characterHealthChanges = (character) => {
  if (!character || typeof character.health !== 'number') {
    return undefined;
    } if (character.health > 50) {
    return 'healthy';
  } if (character.health <= 50 && character.health >= 15) {
     return 'wounded';
  } if (character.health < 15) {
    return 'critical';
  }
}

module.exports = {
  characterHealthChanges,
  character
};

