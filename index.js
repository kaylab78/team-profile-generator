const generate = require('./src/generate');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const teamMembers = [];
const idArray = [];
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

function init() {
    function createManager() {
        console.log("Please build your team.");
        inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's id number?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)

            teamMembers.push(manager)
            idArray.push(answers.managerId)
            createTeam();
        })
    };

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What type of team member would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'Done'
                ]
            }
        ]).then(answers => {
            switch(answers.choice) {
                case 'Engineer': 
                createEngineer();
                break;

                case 'Intern':
                createIntern();
                break;

                default:
                buildTeam();
            }
        })
    };

    function createEngineer(){
        inquirer.prompt([{
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id number?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's GitHub username?"
        }])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.gitHub)

            teamMembers.push(engineer)
            idArray.push(answers.engineerId)
            createTeam();
        })
    }

    function createIntern(){
        inquirer.prompt([{
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id number?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "What is the name of the intern's school?"
        }])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.schoolName)

            teamMembers.push(intern)
            idArray.push(answers.internId)
            createTeam();
        })
    }

    function buildTeam() {
        // Create the output directory if the dist path doesn't exist
        if (!fs.existsSync(DIST_DIR)) {
          fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, generate(teamMembers), 'utf-8');
      }

    createManager();
}

init();