import Swordsman from '../Swordsman';

test('new Swordsman', () => {
  const character = new Swordsman('User');
  expect(character).toEqual({
    name: 'User', health: 100, attack: 40, defence: 10, level: 1, type: 'Swordsman',
  });
});
