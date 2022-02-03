//import employee class
const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

//testing manager class object creation
it('Creates manager object', () => {
    let manager = new Manager('Elon Musk', 1, 'olmusky@aol.com', 1);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});
//tests getRole should be Manager
it('should return Manager', () => {
    let manager = new Manager('Elon Musk', 1, 'olmusky@aol.com', 1);

    expect(manager.name).toEqual('Manager');
})