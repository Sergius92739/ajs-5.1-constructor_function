import types from './types';
/**
 * Функция-конструктор персонажей
 * @constructor
 * @param {string} name имя игрока в виде строки, например 'john', .
 * @param {string} type тип персонажа, в виде строки, например 'Bowman'
 * @throws Выбрасывает ошибку,если арумнет не является строкой,если name не соответствует условию:
 * min - 2 символа, max - 10 символов, если type не один из типов: Bowman,Swordsman,Magician,Daemon,
 * Undead,Zombie
 */

export default function Character(name, type) {
  if (!name || typeof name !== 'string' || name.length < 2 || name.length > 10) {
    throw new Error('Недопустимое значение name');
  }

  const selectedType = types.find((elem) => elem.type === type);

  if (!type || !selectedType || typeof type !== 'string') {
    throw new Error('Недопустимое значение type');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = selectedType.attack;
  this.defens = selectedType.defens;
}

Character.prototype.damage = function damage(points) {
  if (this.health > 0) {
    this.health -= points * (1 - this.defens / 100);
  }
  if (this.health < 0) {
    this.health = 0;
  }
};
