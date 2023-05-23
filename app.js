// npm - global command, comes with node
// npm --version

// local dependency - to be used only in this project
// npm i <packageName>

// global dependency - to be used within the system in any project
// npm i -g <packageName>
// sudo npm install -g <packageName>

const _ = require("lodash")

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)