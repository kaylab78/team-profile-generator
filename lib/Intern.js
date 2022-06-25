const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
}

Intern.prototype = Object.create(Employee.prototype);

module.exports = Intern;