//import employee class
const Employee = require('../lib/Employee');

//intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); //name id and email from employee
        this.school = school; //also takes school
    }
    getSchool() {
        return this.school; //returns this instance of intern's school
    }
    getRole() {
        return 'Intern' //returns this instance of employees role as intern
    }
}
//export class Intern
module.exports = Intern;