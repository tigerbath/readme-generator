const inquirer = require("inquirer");
const utils = require("./utils");
const { writeToFile, writeFile } = require("./file-gen");

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
    type: "confirm",
    message: "Does your project require installation information?",
    name: "installation",
  },
  {
    type: "input",
    message: "installationProcess",
    name: "Enter installation information for your app here",
    when: (answers) => answers.installation === true,
  },
  {
    type: "input",
    message: "Has this project been tested?",
    name: "test",
  },
  {
    type: "input",
    message: "How is this application used?",
    name: "usage",
  },
  {
    type: "input",
    message: "Add contributors email here",
    name: "contributions",
  },
  {
    type: "list",
    message: "Please select what license you used",
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

  ${utils.generateContributions(answers)}

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
