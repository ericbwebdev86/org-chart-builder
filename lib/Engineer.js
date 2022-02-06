//import employee class
const Employee = require('../lib/Employee');

//engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); //name id and email from employee
        this.github = github; //this instance of engineer github
    }
    getGithub() {
        return this.github; //returns this instance of engineer's github
    }
    getRole() {
        return 'Engineer'; //returns this instance of employee's role as engineer
    }
}
//export class engineer
module.exports = Engineer;