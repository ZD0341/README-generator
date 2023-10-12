function generateMarkdown(data) {
    return `
  # ${data.projectName}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} License.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, you can reach out to [${data.githubUsername}](https://github.com/${data.githubUsername}) or contact via email at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;