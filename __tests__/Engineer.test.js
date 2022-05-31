const Engineer = require('../lib/Engineer');

test('Testing github constructor argument', () => {
    const testing = 'G3TSN1P3D';
    const engineer = new Engineer('Salvador', 87, 'dfgh@gmail.com', testing);
    expect(engineer.github).toBe(testing);
});
test('Testing getGithub mehtod', () => {
    const testing = 'G3TSN1P3D';
    const engineer = new Engineer('Salvador', 87, 'dfgh@gmail.com', testing);
    expect(engineer.getGithub()).toBe(testing);
});
test('Testing getRole method', () => {
    const testing = 'Engineer';
    const engineer = new Engineer('Salvador', 87, 'dfgh@gmail.com', 'G3TSN1P3D');
    expect(engineer.getRole()).toBe(testing);
});