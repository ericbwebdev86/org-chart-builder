//import employee class
const Employee = require('../lib/Employee');

//engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}
//export class engineer
module.exports = Engineer;