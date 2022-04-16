const Intern = require('../lib/Intern');

test('set the school of new Intern instantiation', () => {
    const newIntern = new Intern('John', '2', 'sample@sample.com', 'school');
    expect(newIntern.school).toBe('school');
})

test('get the school of new Intern instantiation', () => {
    const newIntern = new Intern('John', '2', 'sample@sample.com', 'school');
    expect(newIntern.getSchool()).toBe('school');
})
