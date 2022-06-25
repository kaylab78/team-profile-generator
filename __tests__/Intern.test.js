const Intern = require('../lib/Intern.js');

test('creates new intern object', () => {
    const intern = new Intern('Kevin', 6, 'email@email.com', 'U of M');

    // check to see if new intern object is created
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern's school", () => {
    const intern = new Intern('Kevin', 6, 'email@email.com', 'U of M');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("gets intern's role", () => {
    const intern = new Intern('Kevin', 6, 'email@email.com', 'U of M');

    // Overrides inherited role of 'Employee' with 'Intern'
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})