const Engineer = require('../lib/Engineer');

test('set the github of new Engineer instantiation', () => {
    const newEngineer = new Engineer('Dave', '2', 'sample@sample.com', 'dave@github.com');
    expect(newEngineer.github).toBe('dave@github.com');
})

test('get the github of new Engineer instantiation', () => {
    const newEngineer = new Engineer('Dave', '2', 'sample@sample.com', 'dave@github.com');
    expect(newEngineer.getGithub()).toBe('dave@github.com');
})