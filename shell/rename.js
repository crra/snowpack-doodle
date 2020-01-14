"use strict";
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const from = path.resolve(args[0]);
const to = path.resolve(args[1]);

fs.renameSync(from, to);
