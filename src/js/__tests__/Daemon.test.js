import Daemon from '../Daemon';

test('new Daemon', () => {
  const character = new Daemon('User');
  expect(character).toEqual({
    name: 'User', health: 100, attack: 10, defence: 40, level: 0,
  });
});
