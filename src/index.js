console.log("hi");

// declare questions
const questions = [];

//generate questions
const generateTitle = (answers) => {
  return;
  `# title ![MIT](https://img.shields.io/static/v1?label=MIT&message=license&color=blue)`;
};

const generateTableOfContents = (answers) => {
  return `## Table of contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Tests](#tests)
    - [Contributing](#contributing)
    - [License](#license)
    `;
};

const generateDescription = (answers) => {
    return `## Description

    ADD DESCRIPTION HERE`
};
// use turnary operator
const generateInstallation = (answers) => {
    return `## Installation

    Run the following script to install the packages required for this application:
    
    \`\`\`
    ADD SCRIPT HERE
    \`\`\`
    `

};
//use turnary operator
const generateUsage = (answers) => {
    return `## Usage

    To use the application run the following script:
    
    \`\`\`
    ADD SCRIPT HERE
    \`\`\`
    `
};

const generateTests = (answers) => {
    return `## Tests

    To use the application run the following script:
    
    \`\`\`
    ADD TEST HERE
    \`\`\`
    `
};

const generateContributing = (answers) => {
    return `## Contributing

    ADD TEXT HERE`
};

const generateLicense = (answers) => {
    return `## License

    ADD LICENSE HERE`
};

const generateReadme = (answers) => {
  return `${generateTitle(answers)}
  
  ${generateTableOfContents(answers)}
  
  ${generateDescription(answers)}
  
  ${generateInstallation(answers)}
  
  ${generateUsage(answers)}

  ${generateTests(answers)}

  ${generateContributing(answers)}

  ${generateLicense(answers)}
  `;
};

};
// use async await
const init = async () => {
  // prompt questions using inquirer
  // generate title using answers
  // write generated readme to a file
};

init();
