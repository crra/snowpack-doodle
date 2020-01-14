"use strict";
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const deletee = path.resolve(args[0]);

fs.rmdirSync(deletee, { recursive: true });
