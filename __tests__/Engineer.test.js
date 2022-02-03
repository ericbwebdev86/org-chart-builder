const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

//testing engineer class object creation
it('Creates engineer object', () => {
    let engineer = new Engineer('Elon Musk', 1, 'olmusky@aol.com', 'muskaroni');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});
//testing getgithub() should return github username
it('should return github username', () => {
    let engineer = new Engineer('Elon Musk', 1, 'olmusky@aol.com', 'muskaroni');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});
//testing getrole() should return role as engineer
it('should return role as engineer', () => {
    let engineer = new Engineer('Elon Musk', 1, 'olmusky@aol.com', 'muskaroni');

    expect(engineer.getRole()).toEqual('Engineer');
});