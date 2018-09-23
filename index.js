
const fetch = require("node-fetch");

const techCsv = fetch("file://./techs.csv");

const reader = new FileReader()