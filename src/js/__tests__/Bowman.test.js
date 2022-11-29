import Bowman from '../Bowman';

test('new Bowman', () => {
  const character = new Bowman('User');
  expect(character).toEqual({
    name: 'User', health: 100, attack: 25, defence: 25, level: 1, type: 'Bowman',
  });
});
