import Bowman from '../Bowman';
import Character from '../Character';

test('character', () => {
  const character = new Character('User');
  expect(character).toEqual({ name: 'User', health: 100, level: 0 });
});
test('levelUp', () => {
  const character = new Bowman('User');
  character.levelUp();
  expect(character).toEqual({
    name: 'User', health: 100, level: 1, attack: 30, defence: 30,
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
