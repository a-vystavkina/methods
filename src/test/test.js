import Bowerman from '../js/Bowerman';

test('Проверка формирования Bowerman', () => {
  const received = new Bowerman('Лучник', 'Bowerman');
  const expected = {
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowerman', () => {
  const received = new Bowerman('Лучник', 'Bowerman');
  received.levelUp();
  const expected = {
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowerman.health = 1', () => {
  const received = new Bowerman('Лучник', 'Bowerman');
  received.health = 1;
  received.levelUp();
  const expected = {
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowerman.health = 0', () => {
  const received = new Bowerman('Лучник', 'Bowerman');
  received.health = 0;
  expect(() => {
    received.levelUp();
  }).toThrow();
});
