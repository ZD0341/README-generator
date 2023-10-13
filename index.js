// TODO: Include packages needed for this application
//fs
//inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/genMarkdown');
// promt the user with questions
function promptUser() {
    console.log('here')
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Enter the project name:',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a project description:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'How do you install the project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use the project?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Contribution guidelines:',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Test instructions:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your application:',
                choices: ['License1', 'License2', 'License3'],
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'Enter your GitHub username:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address associated with your GitHub username:',
            }
        ])
        .then((answer) => {
            console.log(answer)
            writeToFile('.\\Output\\ReadMe.md', generateMarkdown(answer))
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Error:\nPrompt couldn't be rendered in the current environment")
            } else {
                console.error("Error:\n" + error)
            };
        });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync(fileName, "utf8"));
        }
    });


}
// TODO: Create a function to initialize app
function init() {
    promptUser()
}
// Function call to initialize app
init();
