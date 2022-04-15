const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// test('what we are testing for', () => {
//     // test logic
//     expect().toBe()
// })

test('Can instantiate Employee object', () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe('object')
})