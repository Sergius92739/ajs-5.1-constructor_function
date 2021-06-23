import Character from '../character';
import types from '../types';

test('Checking the object returned by the function', () => {
  const testCase = new Character('Test', 'Bowman');
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: types[0].attack,
    defens: types[0].defens,
  };
  expect(testCase).toEqual(expected);
});

test('If the name is less than 2 characters', () => {
  expect(() => {
    Character('T', 'Bowman');
  }).toThrowError(new Error('Недопустимое значение name'));
});

test('If the name is more than 10 characters', () => {
  expect(() => {
    Character('abracadabrabra', 'Bowman');
  }).toThrowError(new Error('Недопустимое значение name'));
});

test('If the type is not one of the types', () => {
  expect(() => {
    Character('Test', 'abracadabrabra');
  }).toThrowError(new Error('Недопустимое значение type'));
});

test('If the name is not a string', () => {
  expect(() => {
    Character(1, 'Bowman');
  }).toThrowError(new Error('Недопустимое значение name'));
});

test('If the type is not a string', () => {
  expect(() => {
    Character('Test', 1);
  }).toThrowError(new Error('Недопустимое значение type'));
});

test('if health = 0, output health = 0', () => {
  const testCase = new Character('Test', 'Bowman');
  testCase.health = 0;
  testCase.damage(30);
  expect(testCase.health).toEqual(0);
});

test('if health > 0 , output health must be correct', () => {
  const testCase = new Character('Test', 'Bowman');
  testCase.damage(30);
  expect(testCase.health).toEqual(77.5);
});

test('if health became negative, output health must be 0', () => {
  const testCase = new Character('Test', 'Bowman');
  testCase.damage(200);
  expect(testCase.health).toEqual(0);
});
