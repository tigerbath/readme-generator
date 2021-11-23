// title generator
const generateTitle = ({ title }) => {
  return "# ${title}";
};

// other contents generator
const generateContents = ({ installation, usage }) => {
  const contents = [];

  if (installation) contents.push("- [Installation](#installation)");

  if (usage) contents.push("- [usage](#usage)");

  return contents;
};

// table of contents generator
const generateTable = () => {
  return "";
};
// installation details generator
const generateInstallation = () => {
  return "";
};
// description generator
const generateDescription = () => {
  return "";
};
// generate usage
const generateUsage = () => {
  return "";
};
// generate tests
const generateTests = () => {
  return "";
};
// generate license
const generateLicense = () => {
  return "";
};
// generate license badge
const generateLicenseBadge = () => {
  return "";
};
// generate contributions
const generateContributions = () => {
  return "";
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
  generateContributions,
};
