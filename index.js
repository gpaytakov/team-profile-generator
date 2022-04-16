const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const employees = [];

function isPositiveInteger(id) {
    return id >>> 0 === parseFloat(id);
}

function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What you want to add?',
                choices: ['add Engineer', 'add Intern', 'build a Team']
            }    
        ])
        .then((answers) => {
            console.log(answers)
        })
    
}

function init() {
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
                        console.log('Please enter Employee name! [Letters only]');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Employee's id #? (Required)",
                // validate: function isPositiveInteger(id) {
                //     return id >>> 0 === parseFloat(id);
                // }
                validate: id => {
                    if (isPositiveInteger(id) > 0) {
                        return true;
                    } else {
                        console.log('Please enter positive integer!')
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
                message: "What is the Manager's office number?"
            }
        ])
        .then((answers) => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            employees.push(manager);
            console.log(employees);
            menu();
        }) 
}

init();