const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee('Kevin');

    expect(employee.name).toBe('Kevin');
})