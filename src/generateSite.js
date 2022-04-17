const generateManager = manager => {
    return `
    <div>
        <article class='card'>
            <div class='card-header'>
                <h3>${manager.name}</h3>
                <h4>${manager.getRole()}</h4>
            </div>
            <div class='card-content'>
                <p class='id'>ID: ${manager.id}</p>
                <p class='email'>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
                <p class='office'>Office #: ${manager.office}</p>
            </div>
        </article>
    </div>
    `;
}

const generateEngineer = engineer => {
    return `
    <div>
        <article class='card'>
            <div class='card-header'>
                <h3>${engineer.name}</h3>
                <h4>${engineer.getRole()}</h4>
            </div>
            <div class='card-content'>
                <p class='id'>ID: ${engineer.id}</p>
                <p class='email'>Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></p>
                <p class='github'>Github: <a href='https://github.com/${engineer.github}'>${engineer.github}</a></p>
            </div>
        </article>
    </div>
    `;    
}

const generateIntern = intern => {
    return `
    <div>
        <article class='card'>
            <div class='card-header'>
                <h3>${intern.name}</h3>
                <h4>${intern.getRole()}</h4>
            </div>
            <div class='card-content'>
                <p class='id'>ID: ${intern.id}</p>
                <p class='email'>Email: <a href='mailto:${intern.email}'>${intern.email}</a></p>
                <p class='school'>School: ${intern.school}</p>
            </div>
        </article>
    </div>
    `;
}

generateCards = data => {
    arr = [];
    for (let i=0; i<data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            arr.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            arr.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            arr.push(internCard);
        }
    }
    const employeeCards = arr.join('')
    const buildTeam = buildTeamPage(employeeCards);
    return buildTeam;
    
}

const buildTeamPage = employeeCards => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <header>
            <nav class='navbar' id='navbar'>
                <h1 class="page-title">Team Members</h1>
            </nav>
        </header>
        <main>
            <div class='container'> 
                
                ${employeeCards}
                
            </div>
        </main>
    </body>
  </html>
  `;
}

// exports module to index.js
module.exports = generateCards;