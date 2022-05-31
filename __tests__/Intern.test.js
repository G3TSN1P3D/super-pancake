const Intern = require('../lib/Intern');

test('Testing school constructor argument', () => {
    const testing = 'SHS';
    const intern = new Intern('john', 56, 'fgh@gmail.com', testing);
    expect(intern.school).toBe(testing);
});
test('Testing getSchool method', () => {
    const testing = 'SHS';
    const intern = new Intern('john', 56, 'fgh@gmail.com', testing);
    expect(intern.getSchool()).toBe(testing);
});
test('Testing getRole method', () => {
    const testing = 'Intern';
    const intern = new Intern('john', 56, 'fgh@gmail.com', 'SHS');
    expect(intern.getRole()).toBe(testing);
});