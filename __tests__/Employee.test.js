const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Employee.js');
// console.log(new Employee);

test('creates a new employee object', () => {
    const employee = new Employee('Kevin', 6, 'email@email.com');

    // check to see if object is created
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

    expect(employee.getEmail()).toEqual(expect.any(String));
});