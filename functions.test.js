const functions = require('./functions');

test('returnTwo function returns 2', () => {
    expect(functions.returnTwo()).toBe(2);
});

test('greeting function returns the correct greeting', () => {
    expect(functions.greeting('James')).toBe('Hello, James.');
    expect(functions.greeting('Jill')).toBe('Hello, Jill.');
});
  
test('add function correctly adds two numbers', () => {
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(5, 9)).toBe(14);
});
  
test('multiply function correctly multiplies two numbers', () => {
    expect(functions.multiply(2, 3)).toBe(6);
    expect(functions.multiply(4, 5)).toBe(20);
});
  
test('divide function correctly divides two numbers', () => {
    expect(functions.divide(6, 3)).toBe(2);
    expect(functions.divide(20, 5)).toBe(4);
});
  
test('subtract function correctly subtracts two numbers', () => {
    expect(functions.subtract(6, 3)).toBe(3);
    expect(functions.subtract(20, 5)).toBe(15);
});

test('reverseString function correctly reverses a string', () => {
    expect(functions.reverseString('hello')).toBe('olleh');
    expect(functions.reverseString('world')).toBe('dlrow');
});
  