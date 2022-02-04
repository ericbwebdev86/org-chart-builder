//import employee class
const Employee = require('../lib/Employee');

//intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern'
    }
}
//export class Intern
module.exports = Intern;