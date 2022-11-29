import Undead from '../Undead';

test('new Undead', () => {
  const character = new Undead('User');
  expect(character).toEqual({
    name: 'User', health: 100, attack: 25, defence: 25, level: 1, type: 'Undead',
  });
});
