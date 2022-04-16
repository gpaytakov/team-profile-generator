const generateCards = employees => {
    
    employees.forEach(emp => {

    })
    
}

module.exports = templateData => {

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
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile</h1>
            </div>
        </header>
        <main class="cards">
            ${generateCards(employees)}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Guvanchmyrat Paytakov</h3>
        </footer>
    </body>
  </html>
  `;
}