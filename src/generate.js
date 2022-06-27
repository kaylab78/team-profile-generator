function generate(teamMembers) {
    function generateManager(manager) {
        return `<p>${manager.getName()}</p>`
    };

    function generateEngineer(engineer){}

    function generateIntern(intern){}

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
        <link rel="stylesheet" href="./style.css">
        <title>Team Members</title>
    </head>
    <body>
        <h1>My Team<h1>
        <div>
            ${generate(teamMembers)}
        </div>
    </body>
    </html>`
}