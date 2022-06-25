const Engineer = require('../lib/Engineer.js');

test('creates new engineer object', () => {
    const engineer = new Engineer('Kevin', 6, 'email@email.com', 'lernantino');

    // check to see if new engineer object is created
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's GitHub username", () => {
    const engineer = new Engineer('Kevin', 6, 'email@email.com', 'lernantino');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github));
});

test("get engineer's role", () => {
    const engineer = new Engineer('Kevin', 6, 'email@email.com', 'lernantino');

    // Overrides inherited role of 'Employee' with 'Engineer'
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})