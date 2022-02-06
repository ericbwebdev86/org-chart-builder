//import Employee class
const Employee = require('./Employee');

//manager class
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email); //name id and email from employee
        this.office = office; //also takes office
    }
    getRole() {
        return 'Manager' //returns this instance of employee's role set to manager
    }
}
module.exports = Manager;