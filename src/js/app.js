export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('The character is already in the team');
    }
  }

  addAll(...params) {
    params.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team();
team.add('Swordman');
team.addAll('Bowman', 'Zombie', 'King', 'Swordman', 'Ironman');
team.toArray();
