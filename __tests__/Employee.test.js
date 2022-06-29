const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee('Kevin', 6, 'email@email.com');

    // reference Wallace, Nicole.
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    // end reference
});

test("gets employee's name", () => {
    const employee = new Employee('Kevin', 6, 'email@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's id", () => {
    const employee = new Employee('Kevin', 6, 'email@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const employee = new Employee('Kevin', 6, 'email@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets employee's role", () => {
    const employee = new Employee('Kevin', 6, 'email@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})