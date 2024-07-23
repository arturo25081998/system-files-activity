const fs = require("fs");

let dataForTheFile = fs.readFileSync("nuevo_archivo.txt", "utf8");
console.log(dataForTheFile);
