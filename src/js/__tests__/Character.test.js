import Bowman from '../Bowman';
import Character from '../Character';

test('character Bowman', () => {
  const character = new Character('User', 'Bowman');
  expect(character).toEqual({
    name: 'User', type: 'Bowman', health: 100, level: 1,
  });
});
test('character Swordsman', () => {
  const character = new Character('User', 'Swordsman');
  expect(character).toEqual({
    name: 'User', type: 'Swordsman', health: 100, level: 1,
  });
});
test('character Magician', () => {
  const character = new Character('User', 'Magician');
  expect(character).toEqual({
    name: 'User', type: 'Magician', health: 100, level: 1,
  });
});
test('character Undead', () => {
  const character = new Character('User', 'Undead');
  expect(character).toEqual({
    name: 'User', type: 'Undead', health: 100, level: 1,
  });
});
test('character Zombie', () => {
  const character = new Character('User', 'Zombie');
  expect(character).toEqual({
    name: 'User', type: 'Zombie', health: 100, level: 1,
  });
});
test('character Daemon', () => {
  const character = new Character('User', 'Daemon');
  expect(character).toEqual({
    name: 'User', type: 'Daemon', health: 100, level: 1,
  });
});
test('levelUp', () => {
  const character = new Bowman('User');
  character.levelUp();
  expect(character).toEqual({
    name: 'User', health: 100, level: 2, attack: 30, defence: 30, type: 'Bowman',
  });
});
test('levelUp error', () => {
  function expectError() {
    const character = new Bowman('User');
    character.health = 0;
    character.levelUp();
  }

  expect(expectError).toThrow(new Error('Персонаж мёртв'));
});
test('character damage', () => {
  function expectError() {
    const character = new Character('User', 'Bowman');
    character.health = -5;
    character.damage(5);
  }
  expect(expectError).toThrow(new Error('Значение здоровья задано неверно'));
});
test('element damage', () => {
  const character = new Bowman('User');
  character.damage(5);
  expect(character).toEqual({
    name: 'User', type: 'Bowman', health: 96.25, level: 1, attack: 25, defence: 25,
  });
});
test('name error ', () => {
  function expectError() {
    return new Character('U', 'Bowman');
  }
  expect(expectError).toThrow(new Error('Некорректное имя'));
});
test('type error ', () => {
  function expectError() {
    return new Character('User', 'User');
  }
  expect(expectError).toThrow(new Error('Тип задан неверно'));
});
