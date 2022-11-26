import Magician from '../Magician';

test('new Magician', () => {
  const character = new Magician('User');
  expect(character).toEqual({
    name: 'User', health: 100, attack: 10, defence: 40, level: 0,
  });
});
