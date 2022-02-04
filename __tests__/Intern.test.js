//imports
const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

//testing intern class object creation
it('Creates intern object', () => {
    let intern = new Intern('Elon Musk', 1, 'olmusky@aol.com', 'SpaceX University of Mars');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});
//testing getschool() should return a school name
it('should return a school name', () => {
    let intern = new Intern('Elon Musk', 1, 'olmusky@aol.com', 'SpaceX University of Mars');

    expect(intern.getSchool()).toEqual(expect.any(String));
});
//testing getrole() should return intern
it('should return intern', () => {
    let intern = new Intern('Elon Musk', 1, 'olmusky@aol.com', 'SpaceX University of Mars');

    expect(intern.getRole()).toEqual('Intern');
});