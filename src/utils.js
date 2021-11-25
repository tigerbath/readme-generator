// title generator
const generateTitle = ({ title }) => {
  return `# ${title}`;
};

// other contents generator
const generateContents = ({ installation, usage }) => {
  const contents = [];

  if (installation) contents.push("- [Installation](#installation)");

  if (usage) contents.push("- [usage](#usage)");

  return contents;
};

// table of contents generator
const generateTable = (answers) => {
  const contents = [
    "- [Description](#description)",
    ...generateContents(answers),
    "- [Contributing](#contributing)",
    "- [License](#license)",
  ];

  return `## Contents\n
  ${contents.join("\n")}`;
};
// installation details generator
const generateInstallation = ({ installation, installationProcess }) => {
  if (installation) {
    return `### Installation
    Run this script to install required packages for this application:
    
    \`\`\`
    ${installationProcess}
    \`\`\``;
  } else {
    return "";
  }
};

// description generator
const generateDescription = ({ description }) => {
  return `### Description
  ${description}`;
};
// generate usage
const generateUsage = ({ usage }) => {
  return `## Usage
  
  To use this application please run the following script:
  
  \`\`\`
  ${usage}
  \`\`\``;
};
// generate tests
const generateTests = ({ tests, testProcess }) => {
  if (tests) {
    return `## Tests
  
  To test this application run the following tests:
  
  \`\`\`
  ${testProcess}
  \`\`\``;
  } else {
    return "";
  }
};
// generate license
const generateLicense = ({ license }) => {
  return `### License
  This application and it's affiliated property is licensed under ${license}`;
};
// generate license badge
const generateLicenseBadge = ({ license }) => {
  let licenseString;
  if (license === "APM") {
    licenseString = `[License: APM](https://img.shields.io/badge/license-MIT-green)`;
  } else if (license === "AUR License") {
    licenseString = `[License: AUR License](https://img.shields.io/badge/license-Apache-blue)`;
  } else if (license === "Bower") {
    licenseString = `[License: Bower](https://img.shields.io/badge/license-MIT-green)`;
  } else if (license === "MIT") {
    licenseString = `[License: MIT](https://img.shields.io/badge/license-MIT-green)`;
  } else if (license === "GitHub") {
    licenseString = `[License: GitHub](https://img.shields.io/badge/license-MIT-green)`;
  }
  return licenseString;
};
// generate contributions
const generateContributing = ({ contribute, github }) => {
  return `### Contributing
Think you can help to improve this application? Drop me an email: ${contribute}
Find my GitHub profile here: [${github}](https://github.com/${github})`;
};

// export for usage
module.exports = {
  generateTitle,
  generateContents,
  generateTable,
  generateInstallation,
  generateDescription,
  generateUsage,
  generateTests,
  generateLicense,
  generateLicenseBadge,
  generateContributing,
};
