import sayHello from '../src/hello';

test('greets a user by name', () => {
  expect(sayHello('Alice')).toBe('Hello, Alice!');
});

test('greets an unnamed user', () => {
  expect(sayHello('')).toBe('Hello, !');
});
