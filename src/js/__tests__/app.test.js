import Team from '../app';

describe('testing player selection', () => {
  test('choosing one new player', () => {
    const team = new Team();
    team.add('Sworman');
    const { size } = team.members;

    expect(size).toBe(1);
  });

  test('choosing a player who already exists', () => {
    const team = new Team();
    team.add('Sworman');

    expect(() => { team.add('Sworman'); }).toThrow('The character is already in the team');
  });

  test('multiple player selection', () => {
    const team = new Team();
    team.addAll('Sworman', 'Bowman', 'Zombie');
    const { size } = team.members;

    expect(size).toBe(3);
  });

  test('converting to an array', () => {
    const team = new Team();
    team.addAll('Sworman', 'Bowman', 'Zombie');
    const array = team.toArray();
    const expected = ['Sworman', 'Bowman', 'Zombie'];

    expect(array).toEqual(expected);
  });
});
