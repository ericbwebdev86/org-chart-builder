//import employee class
const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

//testing the creation of the employee object that takes name, id, and email
it('Creates employee object', () => {
    let employee = new Employee('Elon Musk', 1, 'olmusky@aol.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
//tests getName() should return the employees name
it('returns the employees name', () => {
    let employee = new Employee('Elon Musk', 1, 'olmusky@aol.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
//tests getId() should return employees id
it('should return employees id', () => {
    let employee = new Employee('Elon Musk', 1, 'olmusky@aol.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});
//tests getEmail() should return employees email address
it('should return employees email address', () => {
    let employee = new Employee('Elon Musk', 1, 'olmusky@aol.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});
//tests getRole() should return employees role
it('should return employees role', () => {
    let employee = new Employee('Elon Musk', 1, 'olmusky@aol.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});