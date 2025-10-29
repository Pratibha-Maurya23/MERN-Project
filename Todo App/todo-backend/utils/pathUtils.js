const path = require('path');

// Resolve the root directory (project's root directory)
const rootDir = path.dirname(require.main.filename);

module.exports = rootDir;