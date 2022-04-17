// question asking and collecting answers module is imported
const inquirer = require('inquirer');

// file system module is called
const fs = require('fs');

// team member class creation files imported
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// website creation file is linked
const generateCards = require('./src/generateSite');

// employees array is created and set to empty array, after creating employee profile we will add to it
const employees = [];

// a function checks for if id input is positive integer or not, returns boolean
function isPositiveInteger(id) {
    return id >>> 0 === parseFloat(id);
}

const addManager = () => {
return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Who is the Manager of the team? [Letters only] (Required)",
            validate: nameInput => {
                if (/^[a-z]+$/i.test(nameInput)) {
                    return true;
                } else {
                    console.log("\nPlease enter Manager's name! [Letters only]");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's id #? (Required)",
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
            message: "What is the Manager's email address? [sample@example.xyz](Required)",
            validate: function(email) {
                // Regex mail check (return true if valid mail)
                isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (isValid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the Manager's office number? (Required)",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number! [Positive integer]')
                    return false; 
                } else {
                    return true;
                }
            }
        }

    ])
    .then(managerInput => {
        const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.office);
        employees.push(manager);
    })
};

const addEmployee = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select employee role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name? [Letters only] (Required)",
            validate: nameInput => {
                if (/^[a-z]+$/i.test(nameInput)) {
                    return true;
                } else {
                    console.log('\nPlease enter employee name! [Letters only]');
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
                isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (isValid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username? (Required)",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school intern attends? (Required)',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another Employee?',
            default: false
        }

    ])
    .then(dataForEmployee => {
        let {name, id, email, role, github, school, confirmAddEmployee} = dataForEmployee
        let employee;
        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
        }

        employees.push(employee);
        
        if (confirmAddEmployee) {
            return addEmployee(employee);
        } else {
            console.log(employees);
            return employees;
        }
        
    });
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your page is successfully created! Please see the index.html file in dist folder')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(employees => {
        return  generateCards(employees);
    })
    .then(htmlPage => {
        return writeFile(htmlPage);
    })
    .catch(err => {
        console.log(err);
    })