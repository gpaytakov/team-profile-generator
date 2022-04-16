const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const generateSite = require('./utils/generate-site.js');

const employees = [];

function isPositiveInteger(id) {
    return id >>> 0 === parseFloat(id);
}

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Employee's name? [Letters only] (Required)",
                validate: nameInput => {
                    if (/^[a-z]+$/i.test(nameInput)) {
                        return true;
                    } else {
                        console.log('\nPlease enter Employee name! [Letters only]');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Employee's id #? (Required)",
                validate: id => {
                    if (isPositiveInteger(id) > 0) {
                        return true;
                    } else {
                        console.log('\nPlease enter positive integer!')
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Employee's email address? [sample@example.xyz](Required)",
                validate: function(email) {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "What is the Manager's office number? (Required)"
            }

        ])
        .then((answers) => {
            
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            employees.push([manager.name, manager.id, manager.email, manager.office, manager.getRole()]);
            menu();
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Employee's name? [Letters only] (Required)",
                validate: nameInput => {
                    if (/^[a-z]+$/i.test(nameInput)) {
                        return true;
                    } else {
                        console.log('\nPlease enter Employee name! [Letters only]');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Employee's id #? (Required)",
                validate: id => {
                    if (isPositiveInteger(id) > 0) {
                        return true;
                    } else {
                        console.log('\nPlease enter positive integer!')
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Employee's email address? [sample@example.xyz](Required)",
                validate: function(email) {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the Engineer's github username? (Required)"
            }

        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push([engineer.name, engineer.id, engineer.email, engineer.github, engineer.getRole()]);
            menu();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Employee's name? [Letters only] (Required)",
                validate: nameInput => {
                    if (/^[a-z]+$/i.test(nameInput)) {
                        return true;
                    } else {
                        console.log('\nPlease enter Employee name! [Letters only]');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Employee's id #? (Required)",
                validate: id => {
                    if (isPositiveInteger(id) > 0) {
                        return true;
                    } else {
                        console.log('\nPlease enter positive integer!')
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Employee's email address? [sample@example.xyz](Required)",
                validate: function(email) {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school intern attends? (Required)'
            }

        ])
        .then((answers) => {
            
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push([intern.name, intern.id, intern.email, intern.school, intern.getRole()]);
            menu();
        });
}

function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What you want to do?',
                choices: ['add Engineer', 'add Intern', 'add Manager', 'build a Team']
            }    
        ])
        .then((answers) => {
            console.log(answers);
            const choice = answers.choice;
            switch (choice) {
                case 'add Manager':
                    addManager();
                    break;
                case 'add Engineer':
                    addEngineer();
                    break;
                case 'add Intern':
                    addIntern();
                    break;
                case 'build a Team':
                    buildTeam(employees);
                    return;
            }

        })
    
}

function buildTeam (employees) {
    console.log('You have completed building your Team!');
    console.log(employees);
    
    // employees.forEach(employee => {
    //     console.log(employee);
    // })
}

menu();