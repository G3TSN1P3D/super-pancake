const Manager = require('../lib/Manager');

test('Testing office constructor argument', () => {
    const testing = 34;
    const employee = new Manager('robert', 17, 'dfgh@gmail.com', testing);
    expect(employee.office).toBe(testing);
});
test('Testing getOffice method', () => {
    const testing = 34;
    const employee = new Manager('robert', 17, 'dfgh@gmail.com', testing);
    expect(employee.getOffice()).toBe(testing);
});
test('Testing getRole method', () => {
    const testing = 'Manager';
    const employee = new Manager('robert', 17, 'dfgh@gmail.com', 13);
    expect(employee.getRole()).toBe(testing);
});