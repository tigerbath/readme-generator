const inquirer = require("inquirer");
const utils = require("./utils");
const { writeToFile } = require("./file-gen");

console.log("hi");

// declare questions
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give a description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Does your project require installation information?",
    name: "installation",
  },
  {
    type: "input",
    message: "Has this project been tested?",
    name: "test",
  },
  {
    type: "input",
    message: "What are the usage rights?",
    name: "usage",
  },
  {
    type: "list",
    message: "Who contributed to this project?",
    name: "contributions",
  },
  {
    type: "list",
    message: "Please select what license you used",
    name: "license",
    choices: [
      "APACHE 2.0",
      "BSD 3",
      "BSD 2",
      "MIT",
      "MOZILLA PUBLIC LICENSE 2.0",
    ],
  },
];

// Generate readme document
const generateReadme = (answers) => {
  return `${generateTitle(answers)}
  
  ${utils.generateTable(answers)}
  
  ${utils.generateDescription(answers)}
  
  ${utils.generateInstallation(answers)}
  
  ${utils.generateUsage(answers)}

  ${utils.generateTests(answers)}

  ${utils.generateContributing(answers)}

  ${utils.generateLicense(answers)}
  `;
};

// use async await to initialize user interaction
const init = async () => {
  // prompt questions using inquirer
  const answers = await inquirer.prompt();
  // generate read me
  const readme = generateReadme();
  // write generated read me to file
  writeToFile();
};

init();
