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
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


//module imports
const fs = require('fs');
const inquirer = require('inquirer');
const teamData = [];
//capture input
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const promptManager = () => {
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
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?"
        }
    ]).then(inputMGMT => {
        let = { name, id, email, office } = inputMGMT;
        console.log(inputMGMT);
    })
}
const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: 'Please choose a team member role.',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub profile name?",
            when: (input) => input.roles === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern from?",
            when: (input) => input.roles === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addConfirm',
            message: "Would you like to add another employee?",
            default: false
        }
    ]).then((answers) => {
        if (answers.addConfirm) {
            return promptEmployee();
        }
    }).then(inputEMP => {
        let = { name, id, email, github, school } = inputEMP;
        console.log(inputEMP);
    })
}

promptManager()
    .then(promptEmployee)
    .then(answers => console.log(answers));