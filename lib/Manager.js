//import Employee class
const Employee = require('./Employee');

//manager class
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;