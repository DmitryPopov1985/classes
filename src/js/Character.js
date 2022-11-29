const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя');
    } else {
      this.name = name;
    }
    if (arrType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип задан неверно');
    }
    this.health = 100;
    this.level = 1;
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

  damage(points) {
    if (this.health >= 0) {
      this.health -= (points * (1 - this.defence / 100));
    } else {
      throw new Error('Значение здоровья задано неверно');
    }
  }
}
