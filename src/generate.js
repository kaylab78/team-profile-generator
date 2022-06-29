function generate(teamMembers) {
    function generateManager(manager) {
        return `<div class="card">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
                <p>ID: ${manager.getId()}</p>
                <p>Email: <a href="mailto:${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>`
    };

    function generateEngineer(engineer){
        return `<div class="card">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
                <p>ID: ${engineer.getId()}</p>
                <p>Email: <a href="mailto:${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></p>
            </div>`
    }

    function generateIntern(intern){
        return `<div class="card">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
                <p>ID: ${intern.getId()}</p>
                <p>Email: <a href="mailto:${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>
            </div>`
    }

    const html = []

    html.push(
        teamMembers.filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))    
    )

    html.push(
        teamMembers.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")  
    )

    html.push(
        teamMembers.filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")  
    )

    return html.join("")
}

module.exports = teamMembers => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css" />
        <title>Team Members</title>
    </head>
    <body>
        <header>
            <h1>My Team<h1>
        </header>
        <div class="deck">
            ${generate(teamMembers)}
        </div>
    </body>
    </html>`
}