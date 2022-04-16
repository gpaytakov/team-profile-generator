const Manager = require('../lib/Manager');

test('set the office of new Manager instantiation', () => {
    const newManager = new Manager('Dave', '2', 'sample@sample.com', 'office');
    expect(newManager.office).toBe('office');
})

test('get the office of new Manager instantiation', () => {
    const newManager = new Manager('Dave', '2', 'sample@sample.com', 'office');
    expect(newManager.getOffice()).toBe('office');
})