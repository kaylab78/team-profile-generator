const Engineer = require('../lib/Engineer.js');

test('creates new engineer object', () => {
    const engineer = new Engineer('Kevin', 6, 'email@email.com', 'lernantino');

    // check to see if new engineer object is created
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})