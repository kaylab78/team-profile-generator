const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        // this.employee = new Employee();
    }
}

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;