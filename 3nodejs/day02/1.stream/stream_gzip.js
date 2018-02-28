const fs = require("fs");
const zlib = require("zlib");

const readS = fs.createReadStream("from.txt");
const writeS = fs.createWriteStream("to.gz");

readS.pipe(zlib.createGzip()).pipe(writeS);