const Employee = require('../lib/Employee');

test('return class', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
})
test('Testing name constructor argument', () => {
    const testing = 'bob';
    const employee = new Employee(testing);
    expect(employee.name).toBe(testing);
})
test('Testing id contructor argument', () => {
    const testing = 34;
    const employee = new Employee('bob', testing);
    expect(employee.id).toBe(testing);
})
test('Testing email constructor argument', () => {
    const testing = 'qwertyuiop@gmail.com';
    const employee = new Employee('bob', 34, testing);
    expect(employee.email).toBe(testing);
})
test('Testing getName method', () => {
    const testing = 'bob';
    const employee = new Employee(testing);
    expect(employee.getName()).toBe(testing);
})
test('Testing getId method', () => {
    const testing = 34;
    const employee = new Employee('bob', testing);
    expect(employee.getId()).toBe(testing);
})
test('Testing getEmail method', () => {
    const testing = 'qwertyuiop@gmail.com';
    const employee = new Employee('bob', 34, testing);
    expect(employee.getEmail()).toBe(testing);
})
test('Testing getRole method', () => {
    const testing = 'Employee';
    const employee = new Employee('bob', 34, 'qwertyuiop@gmail.com');
    expect(employee.getRole()).toBe(testing);
})