// require() is a way to add native modules or other modules, created or installed, on nodejs


// 'path' is a native module on nodejs
const path = require('path');

console.log(path.basename(__filename));

// myModules; we connected two js files using `modules.exports` and `require()`
const myModule = require('./exports.js'); // inside the `require()` we added the file path to the module we are exporting
console.log(myModule);