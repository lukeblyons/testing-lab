module.exports = {
    returnTwo: function() {
        return 2;
    },
    greeting: function(name) {
        return `Hello, ${name}.`;
    },
    add: function(num1, num2) {
        return num1 + num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    reverseString: function(str) {
        return str.split('').reverse().join('');
    },
};
  
describe('Math functions', () => {
    // add test case
    // multiply test case
    // divide test case
    // subtract test case
    // reverse test case
});
  