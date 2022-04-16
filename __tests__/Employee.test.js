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

test('set the name of new Employee instantiation', () => {
    const newEmployee = new Employee('Dave');
    expect(newEmployee.name).toBe('Dave');
})

test('get the name of new Employee instantiation', () => {
    const newEmployee = new Employee('Dave');
    expect(newEmployee.getName()).toBe('Dave');
})

test('set the Employee id', () => {
    const newEmployee = new Employee('Dave', '2');
    expect(newEmployee.id).toBe('2');
})

test('get the Employee id', () => {
    const newEmployee = new Employee('Dave', '2');
    expect(newEmployee.getId()).toBe('2');
})

test('set the Employee email', () => {
    const newEmployee = new Employee('Dave', '2', 'sample@sample.com');
    expect(newEmployee.email).toBe('sample@sample.com');
})

test('get the Employee email', () => {
    const newEmployee = new Employee('Dave', '2', 'sample@sample.com');
    expect(newEmployee.getEmail()).toBe('sample@sample.com');
})