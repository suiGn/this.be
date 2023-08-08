// Import and re-export the functionalities from different modules in this.be
// Privacy controls and access methods
const PrivacyModule = require('./settings.js');

// Export the functionalities as a single object
module.exports = {
  privacy: PrivacyModule
};
