const inquirer = require("inquirer");
const utils = require("./utils");
const { writeToFile, writeFile } = require("./file-gen");

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
    type: "confirm",
    message: "Does your project require installation information?",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter installation information for your app here",
    name: "installprocess",
    when: (answers) => answers.installation === true,
  },
  {
    type: "confirm",
    message: "Has this project been tested?",
    name: "testprompt",
  },
  {
    type: "input",
    message: "Provide testing information here:",
    name: "test",
    when: (answers) => answers.testprompt === true,
  },
  {
    type: "input",
    message: "How is this application used? Give instructions here:",
    name: "usage",
  },
  {
    type: "input",
    message: "Add contributors email here:",
    name: "contribute",
  },
  {
    type: "input",
    message: "Add your GitHub username here:",
    name: "github",
  },
  {
    type: "list",
    message: "Please select what license you used:",
    name: "license",
    choices: ["APM", "AUR License", "Bower", "MIT", "GitHub"],
  },
];

// Generate readme document
const generateReadme = (answers) => {
  return `${utils.generateLicenseBadge(answers)}
  ${utils.generateTitle(answers)}
  
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
  const answers = await inquirer.prompt(questions);
  // generate read me
  const readme = generateReadme(answers);
  // write generated read me to file
  writeFile("./user-generated-readme.md", readme);
};

init();
