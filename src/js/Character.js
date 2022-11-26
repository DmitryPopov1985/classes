export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 0;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж мёртв');
    } else {
      this.level += 1;
      this.health = 100;
      this.attack = (this.attack * 0.2) + this.attack;
      this.defence = (this.defence * 0.2) + this.defence;
    }
  }
}
