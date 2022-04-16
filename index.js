const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const employees = []; 

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
                type : 'input',
                name : 'name',
                message : "What is the manager's name?"
            },
            {
                type : 'input',
                name : 'id',
                message : "What is the manager's id?"
            },
            {
                type : 'input',
                name : 'email',
                message : "What is the manager's email address?"
            },
            {
                type : 'input',
                name : 'office',
                message : "What is the manager's office number?"
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