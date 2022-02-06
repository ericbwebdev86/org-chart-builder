// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option




//module imports
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageBuilder = require('./src/page-template');

//array for team member data
const teamData = [];

//capture input for manager
const promptManager = () => {
    console.log(`

    <><><><><><><><><><><><><><><><><><><>

    Thank you for using Org Chart Builder!

    <><><><><><><><><><><><><><><><><><><>

    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You need to enter the manager's name.")
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number? (Required - Number)",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Manager's ID is required and must be a number.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address? (required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You need to enter the manager's email.")
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number? (required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("The manager's office designation must be entered.")
                }
            }
        }
    ]).then(mgrInput => {
        // let { name, id, email, office } = inputMGMT;
        let manager = new Manager(mgrInput.name, mgrInput.id, mgrInput.email, mgrInput.office);
        teamData.push(manager);
        console.log(manager);
    })
};
const promptEmployee = () => {
    console.log(`

    ()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()

    This is the employee portion. You will have to choose a role; 
    either Engineer or Intern. Either required slightly different 
    information. Feel free to add as many as you want!

    ()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
    
    `);
    return inquirer.prompt([
        //select role
        {
            type: 'list',
            name: 'role',
            message: 'Please choose a team member role.',
            choices: ['Engineer', 'Intern']
        },
        //prompts for shared employee information
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You need to enter the employee's name.")
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number? (Required - Number)",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Employee's ID is required and must be a number.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You need to enter the employee's email.")
                }
            }
        },
        //if engineer then prompt for github
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub profile name? (Required)",
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You need to enter the engineer's GitHub username")
                }
            }
        },
        //if intern prompt for school
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern from? (Required)",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("You need to enter the intern's university.")
                }
            }
        },
        // if true add another employee start over at role
        //if false end prompts
        {
            type: 'confirm',
            name: 'addConfirm',
            message: "Would you like to add another employee?",
            default: false
        }
    ]).then(promptEmployeeInput => {
        //destructure answers to promptemployeeinput
        let { name, id, email, role, github, school, addConfirm } = promptEmployeeInput;
        //initialize employee
        let employee;
        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        teamData.push(employee);

        //if statement to restart promptEmployee 
        if (addConfirm) {
            return promptEmployee(teamData);
        } else {
            return teamData;
        }
    })
}
//write HTML file and put it in dist folder
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        //if error
        if (err) {
            console.log(err);
        } else {
            //if success print message
            console.log('Your org chat was created successfully! please see the dist folder.')
        }
    })
};

//app initialization
promptManager() //prompt manager questions
    .then(promptEmployee) //prompt employee questions
    .then(teamData => { //retun pageBuilder using teamData
        return pageBuilder(teamData);
    })
    .then(writeHTML => { //write the HTML file in designated path
        return writeFile(writeHTML);
    })
    .catch(err => { //catch errors
        console.log(err);
    });