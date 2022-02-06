class Employee {
    //constructor function that takes in name, id, email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { //returns name of this instance of eric
        return this.name;
    }
    getId() { //returns id of this employee
        return this.id;
    }
    getEmail() {//returns email of this employee
        return this.email;
    }
    getRole() { //returns role of this employee, set to employee
        return 'Employee';
    }

};
//export employee
module.exports = Employee;