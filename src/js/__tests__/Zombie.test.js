import Zombie from '../Zombie';

test('new Zombie', () => {
  const character = new Zombie('User');
  expect(character).toEqual({
    name: 'User', health: 100, attack: 40, defence: 10, level: 1, type: 'Zombie',
  });
});
