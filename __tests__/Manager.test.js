const Manager = require('../lib/Manager.js');

test('creates a new manager object', () => {
    const manager = new Manager('Kevin', 6, 'email@email.com', 1);

    // check to see if new manager object is created
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's role", () => {
    const manager = new Manager('Kevin', 6, 'email@email.com', 1);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})
