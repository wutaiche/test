const fs = require("fs");

const readS = fs.createReadStream("from.txt");
const writeS = fs.createWriteStream("to.txt");

readS.on("data", (chunk)=>{
	writeS.write(chunk);
})

readS.on("end", ()=>{
})

readS.on("error", (err)=>{
	console.log(err);
})