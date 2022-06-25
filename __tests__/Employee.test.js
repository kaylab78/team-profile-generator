const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee('Kevin', 6, 'email@email.com');

    // check to see if object is created
    // reference Wallace, Nicole.
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    // end reference
});

// test("gets employee's name", () => {
//     const employee = new Employee('Kevin');

//     expect(employee.getName()).toBe('Kevin');
// })